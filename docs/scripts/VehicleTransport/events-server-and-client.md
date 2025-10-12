---
description: These events are executed on server and client side.
---

# Events (server & client)

## VT:vehicleAttached

Triggered when a vehicle was successfully attached to a transport vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**vehicleNetworkId** - `int` - The vehicle's network id.\
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

<mark style="color:red;">**Parameters:**</mark>\
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
