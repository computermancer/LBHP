$files = Get-ChildItem -Recurse -Filter "drill*.js" -Path "pages"

foreach ($file in $files) {
    Write-Host "Processing: $($file.FullName)"
    
    # Read the file content
    $content = Get-Content $file.FullName
    
    # Initialize variables
    $newContent = @()
    $foundDrillTemplate = $false
    
    foreach ($line in $content) {
        # If it's a DrillTemplate import
        if ($line -match "import DrillTemplate") {
            if (-not $foundDrillTemplate) {
                # Add the first DrillTemplate import
                $newContent += $line
                $foundDrillTemplate = $true
            }
            # Skip any additional DrillTemplate imports
        } else {
            # Add all other lines
            $newContent += $line
        }
    }
    
    # Write the new content back to the file
    Set-Content -Path $file.FullName -Value $newContent
    
    if ($foundDrillTemplate) {
        Write-Host "Fixed duplicate imports in: $($file.FullName)"
    }
}
