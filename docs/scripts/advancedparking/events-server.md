
# Events (server)

## Vehicle spawn

Triggered **after** successful vehicle spawn.

Listen-only, do not trigger!

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - Vehicle handle.

```lua
AddEventHandler("AP:vehicleSpawned", function(vehicle)
    print("Vehicle " .. GetVehicleNumberPlateText(vehicle) .. " spawned")
end)
```

***

## Vehicle cleanup

Triggered **before** a vehicle will be deleted through the cleanup.

Listen-only, do not trigger!

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int?` - Vehicle handle. Can be nil if entity does not exist<br>
**plate** - `string` - Vehicle plate (full 8 characters).<br>
**data** - `VehicleData` - Full vehicle data table.<br>
**reason** - `string` - Cleanup reason (`time`, `engineHealth`, `distance`, `zone_<id>`).

```lua
AddEventHandler("AP:cleanup:deletingVehicle", function(vehicle, plate, data, reason)
    print("Vehicle " .. plate .. " was deleted for: " .. reason)
end)
```
