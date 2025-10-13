
# Exports (server)

## DeleteVehicle

Deletes a vehicle from the world and the internal table so that it doesn't respawn.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - The vehicle to delete.<br>
**keepInWorld?** - `bool` - If the vehicle should stay in the world.

<font style="color:green;">**Returns:**</font><br>
`boolean` - If deleting was successful.

```lua
local success = exports["AdvancedParking"]:DeleteVehicle(vehicle, false)
```

***

## GetVehiclePosition

Returns the position of a single vehicle. If vehicle is present on server side will get the 
position using \`GetEntityCoords\`. If not present, it will check AdvancedParking's data for the 
last saved position.

<font style="color:red;">**Parameters:**</font><br>
**plate** - `string` - The license plate text of a vehicle (not case sensitive) (checks full plate 
and trimmed plate).

<font style="color:green;">**Returns:**</font><br>
`vector3?` - The position of the vehicle or nil.

```lua
local position = exports["AdvancedParking"]:GetVehiclePosition(plate)
```

***

## GetVehiclePositions

Returns the positions of several given vehicles. If vehicle is present on server side will get the 
position using \`GetEntityCoords\`. If not present, it will check AdvancedParking's data for the 
last saved position.

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

## DeleteVehicleUsingData

Delete a vehicle without having access to the entity directly. At least one of the first three 
parameters must be provided.

<font style="color:red;">**Parameters:**</font><br>
**identifier?** - `string` - The unique identifier provided by AdvancedParking.<br>
**networkId?** - `int` - The vehicle entity's network id.<br>
**plate?** - `string` - The vehicles license plate text.<br>
**keepInWorld?** - `bool` - If the vehicle should stay in the world.

<font style="color:green;">**Returns:**</font><br>
`boolean` - If deleting was successful.

```lua
local identifier = Entity(vehicle).state.ap_id
local networkId = NetworkGetNetworkIdFromEntity(vehicle)
local plate = GetVehicleNumberPlateText(vehicle)

local success = exports["AdvancedParking"]:DeleteVehicleUsingData(identifier, networkId, plate, true)
```

***

## GetVehicleFromStateBagValue

Tries to find a vehicle that has a specific state bag value attached.

<font style="color:red;">**Parameters:**</font><br>
**bagName** - `string` - The key to search for.<br>
**bagValue** - `any` - The value to search for.

<font style="color:green;">**Returns:**</font><br>
`int?` - The vehicle handle if a match was found or `nil`.

```lua
local vehicle = exports["AdvancedParking"]:GetVehicleFromStateBagValue(bagName, bagValue)
```

***

## GetStateBagsFromVehicle

Gets all state bags from a vehicle that has been saved by AdvancedParking.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - The vehicle handle.

<font style="color:green;">**Returns:**</font><br>
`dictionary<bagName, bagValue>?` - A table containing all found state bag keys and values or nil if 
vehicle was not found.

```lua
local stateBags = exports["AdvancedParking"]:GetStateBagsFromVehicle(vehicle)
if (stateBags) then
    for bagName, bagValue in pairs(stateBags) do
        print(bagName, type(bagValue) == "table" and bagValue or json.encode(bagValue))
    end
end
```

***

## GetStateBagsFromPlate

Gets all state bags from a vehicle that has been saved by AdvancedParking given its plate.

<font style="color:red;">**Parameters:**</font><br>
**plate** - `string` - The vehicle's license plate text.

<font style="color:green;">**Returns:**</font><br>
`dictionary<bagName, bagValue>?` - A table containing all found state bag keys and values or nil if 
vehicle was not found.

```lua
local stateBags = exports["AdvancedParking"]:GetStateBagsFromPlate("KIMINAZE")
if (stateBags) then
    for bagName, bagValue in pairs(stateBags) do
        print(bagName, type(bagValue) == "table" and bagValue or json.encode(bagValue))
    end
end
```

***

## ForceVehicleUpdateInDB

Forces an update of all currently set values of the specified vehicle to the database. Does nothing 
if identifier was not found.

<font style="color:red;">**Parameters:**</font><br>
**identifier** - `string` - AdvancedParking's internal identifier of the vehicle.

```lua
local identifier = Entity(vehicle)?.state?.ap_id

exports["AdvancedParking"]:ForceVehicleUpdateInDB(identifier)
```

***

## GetVehicleData

Gets **all** of AdvancedParking's data from a specified vehicle.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - The vehicle handle.

<font style="color:green;">**Returns:**</font><br>
`dictionary<key, value>?` - A table containing **all** data from the vehicle or nil if vehicle was 
not found.

```lua
local data = exports["AdvancedParking"]:GetVehicleData(vehicle)
```

***

## GetVehicleTuningFromData

Gets **all tuning data** of AdvancedParking's data from a specified vehicle.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - The vehicle handle.

<font style="color:green;">**Returns:**</font><br>
`table?` - A table containing **all tuning data** from the vehicle or nil if vehicle was not found.

```lua
local tuning = exports["AdvancedParking"]:GetVehicleTuningFromData(vehicle)
```

***

## UpdatePlate

Updates a plate in AdvancedParking's data. This is necessary when changing a **saved** vehicle's 
plate so that it doesn't get caught by one of the error protection systems.

<font style="color:red;">**Parameters:**</font><br>
**networkId** - `int` - The vehicle's network id.<br>
**newPlate** - `string` - The new plate to set.

```lua
exports["AdvancedParking"]:UpdatePlate(networkId, newPlate)
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
