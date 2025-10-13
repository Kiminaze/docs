
# Events (client)

## AP:vehicleSpawned

Triggered when a vehicle has been spawned by AdvancedParking.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - The vehicle's handle.

```lua
AddEventHandler("AP:vehicleSpawned", function(vehicle)
    print("Vehicle " .. GetVehicleNumberPlateText(vehicle) .. " spawned")
end)
```
