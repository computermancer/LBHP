# Get all reference drill files
$referenceFiles = Get-ChildItem -Path "REFERENCES\pages" -Filter "drill*.js" -Recurse

foreach ($file in $referenceFiles) {
    # Get paths
    $relativePath = $file.FullName.Substring($file.FullName.IndexOf('week'))
    $outputPath = Join-Path "pages" $relativePath
    
    # Read reference content
    $drillContent = Get-Content $file.FullName -Raw
    
    # Extract component name
    $componentName = [regex]::Match($drillContent, 'export default function (\w+)').Groups[1].Value
    
    # Get week and day
    $week = Split-Path (Split-Path $file.FullName -Parent) -Leaf
    $day = Split-Path $file.FullName -Parent | Split-Path -Leaf
    $drillNum = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    
    # Determine if this is the first or last drill
    $isFirstDrill = $file.Name -eq "drill1.js"
    $isLastDrill = $file.Name -eq "drill5.js"
    
    # Create output directory if it doesn't exist
    $outputDir = Split-Path $outputPath -Parent
    if (-not (Test-Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force
    }

    # Create navigation props
    $prevDrill = if ($isFirstDrill) { "/$week/$day" } else { "/$week/$day/$drillNum" }
    $nextDrill = if ($isLastDrill) { $null } else { "/$week/$day/$drillNum" }
    $disablePrevious = if ($isFirstDrill) { 'disablePrevious={true}' } else { '' }
    $disableNext = if ($isLastDrill) { 'disableNext={true}' } else { '' }

    # Extract the DrillTemplate content from the reference file
    $templateContent = [regex]::Match($drillContent, '<DrillTemplate\s+([^>]+)>').Groups[1].Value
    $templateContent = $templateContent -split '\s+' | Where-Object { $_ -notmatch 'title=' -and $_ -notmatch 'backButtonText=' }
    
    # Create the full content
    $fullContent = @"
import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function $($componentName)() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">$([regex]::Replace($week, 'week', 'Week')) - $([regex]::Replace($day, 'day', 'Day'))</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">$drillNum: $($componentName)</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="$prevDrill" 
            currentDay="/$week/$day" 
            nextDrill="$nextDrill" 
            $($disablePrevious)
            $($disableNext)
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  $($templateContent)
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
"@

    # Write to file
    $fullContent | Set-Content -Path $outputPath -Encoding UTF8
    Write-Host "Created: $outputPath"
}

Write-Host "All drill pages copied and wrapped!"
