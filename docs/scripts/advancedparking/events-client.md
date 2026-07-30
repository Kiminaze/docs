
# Events (client)

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

## Vehicle update

Triggered **after** client side vehicle update. The server side update could still be rejected at 
this point.

Listen-only, do not trigger!

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - Vehicle handle.<br>
**reason** - `string` - Reason for the update.

```lua
AddEventHandler("AP:updateVehicle", function(vehicle, reason)
    print("Vehicle " .. GetVehicleNumberPlateText(vehicle) .. " updated for " .. reason)
end)
```
