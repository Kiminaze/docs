# Exports (server)

## AddKey

Add key(s) to a player using the player id and a plate.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.<br>
**count** - `int` - The number of keys to give.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:AddKey(playerId, plate, count)
```



***

## AddKeyUsingIdentifier

Add key(s) to a player using the player's identifier and a plate.

<font style="color:red;">**Parameters:**</font><br>
**identifier** - `string` - The identifier of the player.<br>
**plate** - `string` - The license plate text of a vehicle.<br>
**count** - `int` - The number of keys to give.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:AddKeyUsingIdentifier(identifier, plate, count)
```

***

## BuyNewKey

Add key(s) to a player using the player id and a plate and charge the player for it.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.<br>
**count** - `int` - The number of keys to give.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:BuyNewKey(playerId, plate, count)
```

***

## RemoveKey

Remove key(s) from the player using the player id and plate.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.<br>
**count** - `int` - The number of keys to give.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:RemoveKey(playerId, plate, count)
```

***

## RemoveKeyUsingIdentifier

Remove key(s) from the player using the identifier and plate.

<font style="color:red;">**Parameters:**</font><br>
**identifier** - `string` - The identifier of the player.<br>
**plate** - `string` - The license plate text of a vehicle.<br>
**count** - `int` - The number of keys to give.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:RemoveKeyUsingIdentifier(identifier, plate, count)
```

***

## AddTempKey

Add a temporary key to the player using the player id and plate.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:AddTempKey(playerId, plate)
```

***

## AddTempKeyUsingIdentifier

Add a temporary key to the player using the identifier and plate.

<font style="color:red;">**Parameters:**</font><br>
**identifier** - `string` - The identifier of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:AddTempKeyUsingIdentifier(identifier, plate)
```

***

## RemoveTempKey

Remove a temporary key from a player using the player id and plate.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:RemoveTempKey(playerId, plate)
```

***

## RemoveTempKeyUsingIdentifier

Remove a temporary key from a player using the identifier and plate.

<font style="color:red;">**Parameters:**</font><br>
**identifier** - `string` - The identifier of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:RemoveTempKeyUsingIdentifier(identifier, plate)
```

***

## ChangeKeyOwner

Give key(s) from one player to another using their player ids.

<font style="color:red;">**Parameters:**</font><br>
**playerIdSender** - `string` - The server side id of the player that should give the key.<br>
**playerIdReceiver** - `string` - The server side id of the player that should receive the key.<br>
**plate** - `string` - The license plate text of a vehicle.<br>
**count** - `int` - The number of keys to give.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:ChangeKeyOwner(playerIdSender, playerIdReceiver, plate, count)
```

***

## ChangeKeyOwnerUsingIdentifier

Give key(s) from one player to another using their identifiers.

<font style="color:red;">**Parameters:**</font><br>
**identifierSender** - `string` - The identifier of the player that should give the key.<br>
**identifierReceiver** - `string` - The identifier of the player that should receive the key.<br>
**plate** - `string` - The license plate text of a vehicle.<br>
**count** - `int` - The number of keys to give.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:ChangeKeyOwnerUsingIdentifier(identifierSender, identifierReceiver, plate, count)
```

***

## ChangeVehicleOwner

Change the owner of a vehicle.

<font style="color:red;">**Parameters:**</font><br>
**playerIdSender** - `string` - The server side id of the player that should give the key.<br>
**playerIdReceiver** - `string` - The server side id of the player that should receive the key.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:ChangeVehicleOwner(playerIdSender, playerIdReceiver, plate)
```

***

## ChangeVehicleOwnerUsingIdentifier

Change the owner of a vehicle using their identifiers.

<font style="color:red;">**Parameters:**</font><br>
**identifierSender** - `string` - The identifier of the player that should give the key.<br>
**identifierReceiver** - `string` - The identifier of the player that should receive the key.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:ChangeVehicleOwnerUsingIdentifier(identifierSender, identifierReceiver, plate)
```

***

## ExchangeLocks

Removes all created keys with a specified plate and charges the player for it.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:ExchangeLocks(playerId, plate)
```

***

## ExchangeLocksUsingIdentifier

Removes all created keys with a specified plate and charges the player for it.

<font style="color:red;">**Parameters:**</font><br>
**identifier** - `string` - The identifier of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success, false on failure.

```lua
local success = exports["VehicleKeyChain"]:ExchangeLocksUsingIdentifier(identifier, plate)
```

***

## RemoveAllKeysUsingPlate

Removes all created keys with a specified plate.

<font style="color:red;">**Parameters:**</font><br>
**plate** - `string` - The license plate text of a vehicle.

```lua
exports["VehicleKeyChain"]:RemoveAllKeysUsingPlate(plate)
```

***

## IsVehicleOwner

Check if a player is the owner of a vehicle.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is owner.

```lua
local isVehicleOwner = exports["VehicleKeyChain"]:IsVehicleOwner(playerId, plate)
```

***

## IsVehicleOwnerUsingIdentifier

Check if a player is the owner of a vehicle.

<font style="color:red;">**Parameters:**</font><br>
**identifier** - `string` - The identifier of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is owner.

```lua
local isVehicleOwner = exports["VehicleKeyChain"]:IsVehicleOwnerUsingIdentifier(identifier, plate)
```

***

## IsKeyOwner

Check if a player is the owner of a key for a vehicle (excluding being the owner of the vehicle).

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.<br>
**model** - `int` - The model hash of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is owner.

```lua
local isKeyOwner = exports["VehicleKeyChain"]:IsKeyOwner(playerId, plate, model)
```

***

## IsKeyOwnerUsingIdentifier

Check if a player is the owner of a key for a vehicle (excluding being the owner of the vehicle).

<font style="color:red;">**Parameters:**</font><br>
**identifier** - `string` - The identifier of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is owner.

```lua
local isKeyOwner = exports["VehicleKeyChain"]:IsKeyOwnerUsingIdentifier(identifier, plate)
```

***

## IsVehicleOrKeyOwner

Check if a player is the owner of a vehicle or its key.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.<br>
**model** - `int` - The model hash of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is owner.

```lua
local isOwner = exports["VehicleKeyChain"]:IsVehicleOrKeyOwner(playerId, plate, model)
```

***

## IsVehicleOrKeyOwnerUsingIdentifier

Check if a player is the owner of a vehicle or its key.

<font style="color:red;">**Parameters:**</font><br>
**identifier** - `string` - The identifier of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is owner.

```lua
local isOwner = exports["VehicleKeyChain"]:IsVehicleOrKeyOwnerUsingIdentifier(identifier, plate)
```

***

## IsTempKeyOwner

Check if a player is the owner of a temporary key for a vehicle.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is owner.

```lua
local isTempKeyOwner = exports["VehicleKeyChain"]:IsTempKeyOwner(playerId, plate)
```

***

## GetPlayerKeys

Returns a list of all keys a player owns.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.

<font style="color:green;">**Returns:**</font><br>
`table<table<string, int, int>>` - List of keys with their plate, count and associated model.

```lua
local keys = exports["VehicleKeyChain"]:GetPlayerKeys(playerId)
for i = 1, #keys do
	print("Plate:", keys[i][1])
	print("ModelHash:", keys[i][2])
	print("Count:", keys[i][3])
	print("")
end
```

***

## GetPlayerVehicles

Returns a list of all vehicles a player owns.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.

<font style="color:green;">**Returns:**</font><br>
`table<table<string, int>>` - List of vehicles with their plate and model hash.

```lua
local vehicleList = exports["VehicleKeyChain"]:GetPlayerVehicles(playerId)
for i = 1, #vehicleList do
	print("Plate:", vehicleList[i][1])
	print("ModelHash:", vehicleList[i][2])
	print("")
end
```

***

## GetPlayerVehiclesAndKeyCount

Returns a list of all vehicles a player owns including the amount of keys.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.

<font style="color:green;">**Returns:**</font><br>
`table<table<string, int, int>>` - List of vehicles with their plate, model hash and key count.

```lua
local vehicleList = exports["VehicleKeyChain"]:GetPlayerVehiclesAndKeyCount(playerId)
for i = 1, #vehicleList do
	print("Plate:", vehicleList[i][1])
	print("ModelHash:", vehicleList[i][2])
	print("Key count:", vehicleList[i][3])
	print("")
end
```

***

## GetPlayerTempKeys

Returns a list of all temporary keys a player owns.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.

<font style="color:green;">**Returns:**</font><br>
`dictionary<string, int>` - Plates associated with a model (or -1 if no model).

```lua
local tempKeys = exports["VehicleKeyChain"]:GetPlayerTempKeys(playerId)
for plate, model in pairs(tempKeys) do
	print("Plate:", plate)
	print("Model:", model)
	print("")
end
```

***

## GetPlayerVehiclesAndKeys

Returns both the results from [GetPlayerVehicles](https://docs.kiminaze.de/scripts/vehiclekeychain/exports-server#getplayervehicles-playerid) and [GetPlayerKeys](https://docs.kiminaze.de/scripts/vehiclekeychain/exports-server#getplayerkeys-playerid).

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The server side id of the player.

<font style="color:green;">**Returns:**</font><br>
`table<table<string, int>>` - List of vehicles with their plate and model hash.<br>
`table<table<string, int, int>>` - List of keys with their plate, count and associated model.

```lua
local vehicleList, keys = exports["VehicleKeyChain"]:GetPlayerVehiclesAndKeys(playerId)
for i = 1, #vehicleList do
	print("Plate:", vehicleList[i][1])
	print("ModelHash:", vehicleList[i][2])
	print("")
end
for i = 1, #keys do
	print("Plate:", keys[i][1])
	print("ModelHash:", keys[i][2])
	print("Count:", keys[i][3])
	print("")
end
```
