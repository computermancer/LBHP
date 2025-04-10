$rootPath = "c:\Users\bravo\Downloads\LBHP-LIVE\LBHP\pages\week1"

# Get all drill files
$drillFiles = Get-ChildItem -Path $rootPath -Recurse -Filter "drill*.js"

foreach ($file in $drillFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace imports
    $content = $content -replace 'import Nav from', 'import DrillLayout from'
    $content = $content -replace 'import DrillNavBar from', ''
    
    # Replace wrapper structure
    $content = $content -replace '<div className="min-h-screen bg-zinc-900">', ''
    $content = $content -replace '</div>', ''
    $content = $content -replace '<Nav />', ''
    
    # Get drill number from filename
    $drillNum = [System.IO.Path]::GetFileNameWithoutExtension($file.Name).Split('drill')[-1]
    $dayPath = $file.Directory.Name
    
    # Get previous and next drill paths
    $prevDrill = if ($drillNum -gt 1) { "/week1/$dayPath/drill$($drillNum - 1)" } else { "null" }
    $nextDrill = if ($drillNum -lt 5) { "/week1/$dayPath/drill$($drillNum + 1)" } else { "null" }
    
    # Get drill title from DrillTemplate
    $drillTitle = $content -match '"Drill \d+: ([^"]+)"' | Out-Null
    $drillTitle = $matches[1]
    
    # Create new DrillLayout structure
    $newStructure = @"
    <DrillLayout
      week={1}
      day={2}
      title="$drillTitle"
      prevDrill=$prevDrill
      currentDay="/week1/$dayPath"
      nextDrill=$nextDrill
    >
"@
    
    # Replace DrillNavBar with DrillLayout
    $content = $content -replace '<DrillNavBar.*?>', $newStructure
    $content = $content -replace '</DrillLayout>', '</DrillLayout>'
    
    # Save updated content
    Set-Content $file.FullName $content
}
