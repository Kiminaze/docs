
# Exports (client)

## Enable

Enable/disable automatic saving of vehicles for a client.

<font style="color:red;">**Parameters:**</font><br>
**enable** - `bool` - `true` to enable, `false` to disable

```lua
exports["AdvancedParking"]:Enable(false)
```

***

## UpdateVehicle

Allows manually updating a vehicle if necessary. Bypasses all blacklist checks and can be used to 
save new vehicles as well.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - Valid vehicle handle.

```lua
exports["AdvancedParking"]:UpdateVehicle(vehicle)
```

***

## UpdatePlate

Updates a plate in AdvancedParking's data. This is necessary when changing a **saved** vehicle's 
plate so that it doesn't get caught by one of the error protection systems.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - Valid vehicle handle.<br>
**newPlate** - `string` - The new plate to set.

```lua
exports["AdvancedParking"]:UpdatePlate(vehicle, newPlate)
```

***

## GetVehiclePosition

Returns the position of a single vehicle. If vehicle is present on client side this will get the 
position directly. If not present, it will check server side similar to the server side export.

<font style="color:red;">**Parameters:**</font><br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`vector3?` - The position of the vehicle or nil.

```lua
local position = exports["AdvancedParking"]:GetVehiclePosition(plate)
```

***

## GetVehiclePositions

Returns the positions of several given vehicles. If vehicle is present on client side this will get 
the position directly. If not present, it will check server side similar to the server side export.

<font style="color:red;">**Parameters:**</font><br>
**plates** - `table<string>` - Table containing license plates (not case sensitive) (checks full 
plate and trimmed plate).

<font style="color:green;">**Returns:**</font><br>
`dictionary<string, vector3>` - The positions of the vehicles. Can be empty if none was found.

```lua
local plateList = { plate1, plate2, plate3 }
local positions = exports["AdvancedParking"]:GetVehiclePositions(plateList)
for plate, position in pairs(positions) do
    print(plate, tostring(position))
end
```



***

## DeleteVehicle

Deletes a vehicle from the world and the internal table so that it doesn't respawn.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - The vehicle to delete.<br>
**keepInWorld?** - `bool` - If the vehicle should stay in the world.

```lua
exports["AdvancedParking"]:DeleteVehicle(vehicle, false)
```



***

## DeleteVehicleOnServer

Delete a vehicle without having access to the entity directly. At least one of the first three 
parameters must be provided.

<font style="color:red;">**Parameters:**</font><br>
**identifier?** - `string` - The unique identifier provided by AdvancedParking.<br>
**networkId?** - `int` - The vehicle entity's network id.<br>
**plate?** - `string` - The vehicles license plate text.<br>
**keepInWorld?** - `bool` - If the vehicle should stay in the world (defaults to false).

```lua
local identifier = Entity(vehicle).state.ap_id
local networkId = NetworkGetNetworkIdFromEntity(vehicle)
local plate = GetVehicleNumberPlateText(vehicle)

exports["AdvancedParking"]:DeleteVehicleOnServer(identifier, networkId, plate, true)
```



***

## FreezeVehicle

Freezes (or unfreezes) a vehicle. This is intended to be used from the `fixFreezeEntity.lua` but 
can be used when the file cannot be used. Can only be executed when using the 
`forceUnfreezeVehicles` config option.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - The vehicle handle.<br>
**freeze** - `boolean` - `true` for freezing, `false` for unfreezing.

```lua
exports["AdvancedParking"]:FreezeVehicle(vehicle, true)
```
