$drillFiles = Get-ChildItem -Path "pages\week*\day*\drill*.js" -Recurse

foreach ($file in $drillFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace pt-0 with pt-16
    $newContent = $content -replace 'pt-0', 'pt-16'
    
    # Only write if there was a change
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Updated padding in $($file.FullName)"
    }
}
