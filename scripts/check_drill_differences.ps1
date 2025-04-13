# Get current directory
$rootDir = "c:\Users\bravo\Downloads\LBHP-LIVE"

# Get all drill files from both directories
$currentDrills = Get-ChildItem -Path "$rootDir\pages\week*\day*\drill*.js" -Recurse
$referenceDrills = Get-ChildItem -Path "$rootDir\REFERENCES\pages\week*\day*\drill*.js" -Recurse

# Create a list to store drills with differences
$differentDrills = @()

# Compare each drill
foreach ($currentDrill in $currentDrills) {
    $referencePath = $currentDrill.FullName.Replace("pages", "REFERENCES\pages")
    
    if (Test-Path $referencePath) {
        $currentContent = Get-Content $currentDrill.FullName -Raw
        $referenceContent = Get-Content $referencePath -Raw
        
        # Compare important sections
        if ($currentContent -ne $referenceContent) {
            $drillInfo = @{
                Week = $currentDrill.Directory.Parent.Name
                Day = $currentDrill.Directory.Name
                Drill = $currentDrill.Name
            }
            $differentDrills += $drillInfo
        }
    }
}

# Output the results
"Drills with Content Differences:" | Out-File -FilePath "$rootDir\drill_differences.txt" -Encoding UTF8
foreach ($drill in $differentDrills) {
    "Week $($drill.Week), Day $($drill.Day), $($drill.Drill)" | Out-File -FilePath "$rootDir\drill_differences.txt" -Encoding UTF8 -Append
}

Write-Host "Found $($differentDrills.Count) drills with content differences."
Write-Host "Results written to drill_differences.txt"
