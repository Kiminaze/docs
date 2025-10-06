
# Events (server)

## AP:vehicleSpawned

Triggered when a vehicle has been spawned by AdvancedParking.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `int` - The vehicle's server side handle.

```lua
AddEventHandler("AP:vehicleSpawned", function(vehicle)
    print("Vehicle " .. GetVehicleNumberPlateText(vehicle) .. " spawned")
end)
```



***

## AP:cleanup:deletingVehicle

Triggered when a vehicle has been marked for cleanup. Executes right **before** deleting the entity.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `int` - The vehicle's server side handle.\
**plate** - `string` - The vehicle's plate (full 8 characters).\
**reason** - `string` - The cleanup reason (`time`, `engineHealth`, `distance`, `zone_<id>`).

```lua
AddEventHandler("AP:vehicleSpawned", function(vehicle)
    print("Vehicle " .. GetVehicleNumberPlateText(vehicle) .. " spawned")
end)
```
