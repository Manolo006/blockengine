
Add-Type -AssemblyName System.IO.Compression.FileSystem
$jar = "C:\\Users\\matma\\AppData\\Roaming\\.minecraft\\versions\\1.21.4\\1.21.4.jar"
$zip = [System.IO.Compression.ZipFile]::OpenRead($jar)
$map = @{}
foreach ($e in $zip.Entries) {
    if ($e.FullName.StartsWith("assets/minecraft/particles/") -and $e.Name.EndsWith(".json")) {
        $reader = New-Object System.IO.StreamReader($e.Open())
        $json = $reader.ReadToEnd()
        $reader.Close()
        $pName = $e.Name.Replace(".json","")
        $map[$pName] = ($json | ConvertFrom-Json).textures
    }
}
$zip.Dispose()
$map | ConvertTo-Json -Depth 4 | Out-File -FilePath "c:\\Users\\matma\\Desktop\\blockengine\\scratch\\particle_textures_map.json" -Encoding utf8
Write-Host "Extracted particles map!"
