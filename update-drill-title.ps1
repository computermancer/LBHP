$drillFiles = Get-ChildItem -Path "pages\week*\day*\drill*.js" -Recurse

foreach ($file in $drillFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace the title section with the new fixed-height version
    $newContent = $content -replace '(?s)(<div className="max-w-\[500px\] mx-auto">\s*<h1.*?</h1>\s*<h2.*?</h2>\s*<div className="h-2">)', '<div className="max-w-[500px] mx-auto">\n          <div className="h-16 flex flex-col justify-center">\n            <h1 className="text-orange-300 text-4xl font-bold mb-4">$1</h1>\n            <h2 className="text-orange-300 text-2xl font-bold mb-4">$2</h2>\n          </div>\n          <div className="h-2">'
    
    # Only write if there was a change
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Updated title container in $($file.FullName)"
    }
}
