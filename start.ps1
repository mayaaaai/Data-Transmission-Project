## Start the server and client in one command

# Save current location
Push-Location

# Start the server
Set-Location -Path "server"
Start-Process -FilePath "node" -ArgumentList ".\server.mjs"

# Start the client
Set-Location -Path "..\client"
Start-Process -FilePath "npm" -ArgumentList "start"

# Restore location
Pop-Location
