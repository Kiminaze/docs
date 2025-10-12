# Exports (server)

## ChangePlate

Returns the position of a single vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The player id of the player that owns the vehicle.\
**vehicleNetId** - `int` - The vehicle network id.\
**newPlate** - `string` - The new license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleRegistration"]:ChangePlate(playerId, vehicleNetId, newPlate)
</strong></code></pre>



***

## GetFullHistory

Get the full history of all plate changes from a player.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The player id of the player that owns the vehicle.\
**vehicleNetId** - `int` - The vehicle network id.\
**newPlate** - `string` - The new license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`dictionary<string, table<modelHash: int, oldPlate: string, date: string, ownerName: string>>` - List of all plate changes with the current plate as index.

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

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The player id of a player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`table<table<oldPlate: string, date: string, ownerName: string>>` - List of all plate changes from the specified plate.

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

<mark style="color:red;">**Parameters:**</mark>\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`table<table<oldPlate: string, date: string, ownerName: string>>` - List of all plate changes from the specified plate.

```lua
local history = exports["VehicleRegistration"]:GetPlateHistory(plate)
for i = 1, #history do
    print("old plate:", history[i].oldPlate)
    print("date:", history[i].date)
    print("owner name:", history[i].ownerName)
    print("")
end
```
