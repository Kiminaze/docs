
# Events (server)

## AP:vehicleSpawned

Triggered when a vehicle has been spawned by AdvancedParking.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - The vehicle's server side handle.

```lua
AddEventHandler("AP:vehicleSpawned", function(vehicle)
    print("Vehicle " .. GetVehicleNumberPlateText(vehicle) .. " spawned")
end)
```

***

## AP:cleanup:deletingVehicle

Triggered when a vehicle has been marked for cleanup. Executes right **before** deleting the entity.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int?` - The vehicle's server side handle. Can be nil if entity does not exist<br>
**plate** - `string` - The vehicle's plate (full 8 characters).<br>
**reason** - `string` - The cleanup reason (`time`, `engineHealth`, `distance`, `zone_<id>`).

```lua
AddEventHandler("AP:cleanup:deletingVehicle", function(vehicle, plate, reason)
    print("Vehicle " .. plate .. " was deleted for: " .. reason)
end)
```
