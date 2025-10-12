# Exports (client)

## Enable

Enable/disable the ability to interact with the script functions for a single client.

<mark style="color:red;">**Parameters:**</mark>\
**enable** - `bool` - true to enable, false to disable

```lua
exports["VehicleTransport"]:Enable(false)
```

#### Example for ESX and enabling it for a single job:

First open the `config.lua` and set the option `defaultEnabled` to false. This will disable the script for everyone. After that you can enable the script via code:

```lua
RegisterNetEvent("esx:playerLoaded", function(xPlayer)
    ESX.PlayerData = xPlayer

    if (ESX.PlayerData.job.name == "mechanic") then
        exports["VehicleTransport"]:Enable(true)
    end
end)

RegisterNetEvent("esx:setJob", function(job)
    exports["VehicleTransport"]:Enable(job.name == "mechanic")

    ESX.PlayerData.job = job
end)
```
