
# Events (server & client)

## VT:vehicleAttached

Triggered when a vehicle was successfully attached to a transport vehicle.

<font style="color:red;">**Parameters:**</font><br>
**vehicleNetworkId** - `int` - The vehicle's network id.<br>
**transportNetworkId** - `int` - The transport vehicle's network id.

```lua
AddEventHandler("VT:vehicleAttached", function(vehicleNetworkId, transportNetworkId)
    local vehicle = NetworkGetEntityFromNetworkId(vehicleNetworkId)
    local transportVehicle = NetworkGetEntityFromNetworkId(transportNetworkId)
    if (not DoesEntityExist(vehicle) or not DoesEntityExist(transportVehicle)) then
        return
    end

    print(GetVehicleNumberPlateText(vehicle) .. " was attached to " .. GetVehicleNumberPlateText(transportVehicle))
end)
```

***

## VT:vehicleDetached

Triggered when a vehicle was successfully detached from a transport vehicle.

<font style="color:red;">**Parameters:**</font><br>
**vehicleNetworkId** - `int` - The vehicle's network id.

```lua
AddEventHandler("VT:vehicleDetached", function(vehicleNetworkId)
    local vehicle = NetworkGetEntityFromNetworkId(vehicleNetworkId)
    if (not DoesEntityExist(vehicle)) then
        return
    end

    print(GetVehicleNumberPlateText(vehicle) .. " was detached")
end)
```
