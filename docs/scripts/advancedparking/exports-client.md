
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
**vehicle** - `int` - Vehicle handle.

```lua
exports["AdvancedParking"]:UpdateVehicle(vehicle)
```

***

## DeleteVehicle

Deletes a vehicle from the world and the internal data so that it doesn't respawn.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - Vehicle handle.<br>
**keepInWorld?** - `bool` - If the vehicle should stay in the world. Defaults to `false`.

```lua
exports["AdvancedParking"]:DeleteVehicle(vehicle)
```

***

## DeleteVehicleOnServer

Delete a vehicle without having access to the entity directly. At least one of the first three 
parameters must be provided.

<font style="color:red;">**Parameters:**</font><br>
**identifier?** - `string` - The unique identifier provided by AdvancedParking.<br>
**networkId?** - `int` - Vehicle network id.<br>
**plate?** - `string` - Vehicle license plate text.<br>
**keepInWorld?** - `bool` - If the vehicle should stay in the world. Defaults to `false`.

```lua
local identifier = Entity(vehicle).state.ap_id
local networkId = NetworkGetNetworkIdFromEntity(vehicle)
local plate = GetVehicleNumberPlateText(vehicle)

exports["AdvancedParking"]:DeleteVehicleOnServer(identifier, networkId, plate)
```

***

## GetVehiclePosition

Returns the position of a single vehicle. If vehicle is present on client side this will get the 
position directly. If not present, it will check server side similar to the 
[server side export](exports-server.md#getvehicleposition).

<font style="color:red;">**Parameters:**</font><br>
**plate** - `string` - Vehicle license plate text.

<font style="color:green;">**Returns:**</font><br>
`vector3?` - Position of the vehicle or nil.

```lua
local position = exports["AdvancedParking"]:GetVehiclePosition(plate)
```

***

## GetVehiclePositions

Returns the positions of several given vehicles. If vehicle is present on client side this will get 
the position directly. If not present, it will check server side similar to the 
[server side export](exports-server.md#getvehiclepositions).

<font style="color:red;">**Parameters:**</font><br>
**plates** - `table<string>` - Table containing license plates (not case sensitive) (checks full 
and trimmed plate).

<font style="color:green;">**Returns:**</font><br>
`dictionary<string, vector3>` - Positions of the vehicles by plate. Can be empty if none was found.

```lua
local plateList = { plate1, plate2, plate3 }
local positions = exports["AdvancedParking"]:GetVehiclePositions(plateList)
for plate, position in pairs(positions) do
    print(plate, tostring(position))
end
```

***

## UpdatePlate

Updates a plate in AdvancedParking's data. This is necessary when changing a **saved** vehicle's 
plate so that it doesn't get caught by one of the error protection systems. Ideally this should 
_replace_ calls to `SetVehicleNumberPlateText`.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - Vehicle handle.<br>
**newPlate** - `string` - New plate to set.

```lua
exports["AdvancedParking"]:UpdatePlate(vehicle, newPlate)
```

***

## FreezeVehicle

Freezes (or unfreezes) a vehicle. This is intended to be used from the `fixFreezeEntity.lua` but 
can be used when the file cannot be used. Can only be executed when using the 
`forceUnfreezeVehicles` config option.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - Vehicle handle.<br>
**freeze** - `boolean` - `true` for freezing, `false` for unfreezing.

```lua
exports["AdvancedParking"]:FreezeVehicle(vehicle, true)
```
