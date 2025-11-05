
# Exports (server)

## ChangePlate

Changes the license plate of a specified player vehicle similar to how the script itself does it.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The player id of the player that owns the vehicle.<br>
**vehicleNetId** - `int` - The vehicle network id.<br>
**newPlate** - `string` - The new license plate.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success.

```lua
local success = exports["VehicleRegistration"]:ChangePlate(playerId, vehicleNetId, newPlate)
```

***

## GetFullHistory

Get the full history of all plate changes from a player.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The player id of the player that owns the vehicle.<br>
**vehicleNetId** - `int` - The vehicle network id.<br>
**newPlate** - `string` - The new license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`dictionary<string, table<modelHash: int, oldPlate: string, date: string, ownerName: string>>` - 
List of all plate changes with the current plate as index.

```lua
local history = exports["VehicleRegistration"]:GetFullHistory(playerId)
for plate, data in pairs(history) do
    print("model hash:", data.modelHash)
    print("old plate:", data.oldPlate)
    print("date:", data.date)
    print("owner name:", data.ownerName)
    print("")
end
```

***

## GetHistory

Get the history of a specific player's plate.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The player id of a player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`table<table<oldPlate: string, date: string, ownerName: string>>` - List of all plate changes from 
the specified plate.

```lua
local history = exports["VehicleRegistration"]:GetHistory(playerId, plate)
for i = 1, #history do
    print("old plate:", history[i].oldPlate)
    print("date:", history[i].date)
    print("owner name:", history[i].ownerName)
    print("")
end
```

***

## GetPlateHistory

Get the history of a specified plate.

<font style="color:red;">**Parameters:**</font><br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`table<table<oldPlate: string, date: string, ownerName: string>>` - List of all plate changes from 
the specified plate.

```lua
local history = exports["VehicleRegistration"]:GetPlateHistory(plate)
for i = 1, #history do
    print("old plate:", history[i].oldPlate)
    print("date:", history[i].date)
    print("owner name:", history[i].ownerName)
    print("")
end
```
