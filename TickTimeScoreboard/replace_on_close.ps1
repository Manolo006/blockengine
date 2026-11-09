param(
    [int]$pidToWait = 30460,
    [string]$src = "c:\Users\Manuel\Desktop\blockengine\TickTimeScoreboard\build\TickTimeScoreboard-1.0.1.jar",
    [string]$dst = "C:\Users\Manuel\AppData\Roaming\ModrinthApp\profiles\fermium\mods\TickTimeScoreboard-1.0.0.jar"
)

try {
    Wait-Process -Id $pidToWait -ErrorAction SilentlyContinue
} catch {}

Start-Sleep -Seconds 1
for ($i = 0; $i -lt 15; $i++) {
    try {
        Copy-Item -Path $src -Destination $dst -Force -ErrorAction Stop
        Write-Host "Mod jar updated successfully after Minecraft closed."
        break
    } catch {
        Start-Sleep -Seconds 1
    }
}
