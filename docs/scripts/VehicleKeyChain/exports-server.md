# Exports (server)

## AddKey

Add key(s) to a player using the player id and a plate.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.\
**count** - `int` - The number of keys to give.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:AddKey(playerId, plate, count)
</strong></code></pre>



***

## AddKeyUsingIdentifier

Add key(s) to a player using the player's identifier and a plate.

<mark style="color:red;">**Parameters:**</mark>\
**identifier** - `string` - The identifier of the player.\
**plate** - `string` - The license plate text of a vehicle.\
**count** - `int` - The number of keys to give.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:AddKeyUsingIdentifier(identifier, plate, count)
</strong></code></pre>



***

## BuyNewKey

Add key(s) to a player using the player id and a plate and charge the player for it.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.\
**count** - `int` - The number of keys to give.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:BuyNewKey(playerId, plate, count)
</strong></code></pre>



***

## RemoveKey

Remove key(s) from the player using the player id and plate.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.\
**count** - `int` - The number of keys to give.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:RemoveKey(playerId, plate, count)
</strong></code></pre>



***

## RemoveKeyUsingIdentifier

Remove key(s) from the player using the identifier and plate.

<mark style="color:red;">**Parameters:**</mark>\
**identifier** - `string` - The identifier of the player.\
**plate** - `string` - The license plate text of a vehicle.\
**count** - `int` - The number of keys to give.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:RemoveKeyUsingIdentifier(identifier, plate, count)
</strong></code></pre>



***

## AddTempKey

Add a temporary key to the player using the player id and plate.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:AddTempKey(playerId, plate)
</strong></code></pre>



***

## AddTempKeyUsingIdentifier

Add a temporary key to the player using the identifier and plate.

<mark style="color:red;">**Parameters:**</mark>\
**identifier** - `string` - The identifier of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:AddTempKeyUsingIdentifier(identifier, plate)
</strong></code></pre>



***

## RemoveTempKey

Remove a temporary key from a player using the player id and plate.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:RemoveTempKey(playerId, plate)
</strong></code></pre>



***

## RemoveTempKeyUsingIdentifier

Remove a temporary key from a player using the identifier and plate.

<mark style="color:red;">**Parameters:**</mark>\
**identifier** - `string` - The identifier of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:RemoveTempKeyUsingIdentifier(identifier, plate)
</strong></code></pre>



***

## ChangeKeyOwner

Give key(s) from one player to another using their player ids.

<mark style="color:red;">**Parameters:**</mark>\
**playerIdSender** - `string` - The server side id of the player that should give the key.\
**playerIdReceiver** - `string` - The server side id of the player that should receive the key.\
**plate** - `string` - The license plate text of a vehicle.\
**count** - `int` - The number of keys to give.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:ChangeKeyOwner(playerIdSender, playerIdReceiver, plate, count)
</strong></code></pre>



***

## ChangeKeyOwnerUsingIdentifier

Give key(s) from one player to another using their identifiers.

<mark style="color:red;">**Parameters:**</mark>\
**identifierSender** - `string` - The identifier of the player that should give the key.\
**identifierReceiver** - `string` - The identifier of the player that should receive the key.\
**plate** - `string` - The license plate text of a vehicle.\
**count** - `int` - The number of keys to give.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:ChangeKeyOwnerUsingIdentifier(identifierSender, identifierReceiver, plate, count)
</strong></code></pre>



***

## ChangeVehicleOwner

Change the owner of a vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**playerIdSender** - `string` - The server side id of the player that should give the key.\
**playerIdReceiver** - `string` - The server side id of the player that should receive the key.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:ChangeVehicleOwner(playerIdSender, playerIdReceiver, plate)
</strong></code></pre>



***

## ChangeVehicleOwnerUsingIdentifier

Change the owner of a vehicle using their identifiers.

<mark style="color:red;">**Parameters:**</mark>\
**identifierSender** - `string` - The identifier of the player that should give the key.\
**identifierReceiver** - `string` - The identifier of the player that should receive the key.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:ChangeVehicleOwnerUsingIdentifier(identifierSender, identifierReceiver, plate)
</strong></code></pre>



***

## ExchangeLocks

Removes all created keys with a specified plate and charges the player for it.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:ExchangeLocks(playerId, plate)
</strong></code></pre>



***

## ExchangeLocksUsingIdentifier

Removes all created keys with a specified plate and charges the player for it.

<mark style="color:red;">**Parameters:**</mark>\
**identifier** - `string` - The identifier of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success, false on failure.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleKeyChain"]:ExchangeLocksUsingIdentifier(identifier, plate)
</strong></code></pre>



***

## RemoveAllKeysUsingPlate

Removes all created keys with a specified plate.

<mark style="color:red;">**Parameters:**</mark>\
**plate** - `string` - The license plate text of a vehicle.

<pre class="language-lua"><code class="lang-lua"><strong>exports["VehicleKeyChain"]:RemoveAllKeysUsingPlate(plate)
</strong></code></pre>



***

## IsVehicleOwner

Check if a player is the owner of a vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isVehicleOwner = exports["VehicleKeyChain"]:IsVehicleOwner(playerId, plate)
</strong></code></pre>



***

## IsVehicleOwnerUsingIdentifier

Check if a player is the owner of a vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**identifier** - `string` - The identifier of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isVehicleOwner = exports["VehicleKeyChain"]:IsVehicleOwnerUsingIdentifier(identifier, plate)
</strong></code></pre>



***

## IsKeyOwner

Check if a player is the owner of a key for a vehicle (excluding being the owner of the vehicle).

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.\
**model** - `int` - The model hash of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isKeyOwner = exports["VehicleKeyChain"]:IsKeyOwner(playerId, plate, model)
</strong></code></pre>



***

## IsKeyOwnerUsingIdentifier

Check if a player is the owner of a key for a vehicle (excluding being the owner of the vehicle).

<mark style="color:red;">**Parameters:**</mark>\
**identifier** - `string` - The identifier of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isKeyOwner = exports["VehicleKeyChain"]:IsKeyOwnerUsingIdentifier(identifier, plate)
</strong></code></pre>



***

## IsVehicleOrKeyOwner

Check if a player is the owner of a vehicle or its key.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.\
**model** - `int` - The model hash of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isOwner = exports["VehicleKeyChain"]:IsVehicleOrKeyOwner(playerId, plate, model)
</strong></code></pre>



***

## IsVehicleOrKeyOwnerUsingIdentifier

Check if a player is the owner of a vehicle or its key.

<mark style="color:red;">**Parameters:**</mark>\
**identifier** - `string` - The identifier of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isOwner = exports["VehicleKeyChain"]:IsVehicleOrKeyOwnerUsingIdentifier(identifier, plate)
</strong></code></pre>



***

## IsTempKeyOwner

Check if a player is the owner of a temporary key for a vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isTempKeyOwner = exports["VehicleKeyChain"]:IsTempKeyOwner(playerId, plate)
</strong></code></pre>



***

## GetPlayerKeys

Returns a list of all keys a player owns.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.

<mark style="color:green;">**Returns:**</mark>\
`table<table<string, int, int>>` - List of keys with their plate, count and associated model.

<pre class="language-lua"><code class="lang-lua"><strong>local keys = exports["VehicleKeyChain"]:GetPlayerKeys(playerId)
</strong>for i = 1, #keys do
	print("Plate:", keys[i][1])
	print("ModelHash:", keys[i][2])
	print("Count:", keys[i][3])
	print("")
end
</code></pre>



***

## GetPlayerVehicles

Returns a list of all vehicles a player owns.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.

<mark style="color:green;">**Returns:**</mark>\
`table<table<string, int>>` - List of vehicles with their plate and model hash.

<pre class="language-lua"><code class="lang-lua"><strong>local vehicleList = exports["VehicleKeyChain"]:GetPlayerVehicles(playerId)
</strong>for i = 1, #vehicleList do
	print("Plate:", vehicleList[i][1])
	print("ModelHash:", vehicleList[i][2])
	print("")
end
</code></pre>



***

## GetPlayerVehiclesAndKeyCount

Returns a list of all vehicles a player owns including the amount of keys.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.

<mark style="color:green;">**Returns:**</mark>\
`table<table<string, int, int>>` - List of vehicles with their plate, model hash and key count.

<pre class="language-lua"><code class="lang-lua"><strong>local vehicleList = exports["VehicleKeyChain"]:GetPlayerVehiclesAndKeyCount(playerId)
</strong>for i = 1, #vehicleList do
	print("Plate:", vehicleList[i][1])
	print("ModelHash:", vehicleList[i][2])
	print("Key count:", vehicleList[i][3])
	print("")
end
</code></pre>



***

## GetPlayerTempKeys

Returns a list of all temporary keys a player owns.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.

<mark style="color:green;">**Returns:**</mark>\
`dictionary<string, int>` - Plates associated with a model (or -1 if no model).

<pre class="language-lua"><code class="lang-lua"><strong>local tempKeys = exports["VehicleKeyChain"]:GetPlayerTempKeys(playerId)
</strong>for plate, model in pairs(tempKeys) do
	print("Plate:", plate)
	print("Model:", model)
	print("")
end
</code></pre>



***

## GetPlayerVehiclesAndKeys

Returns both the results from [GetPlayerVehicles](https://docs.kiminaze.de/scripts/vehiclekeychain/exports-server#getplayervehicles-playerid) and [GetPlayerKeys](https://docs.kiminaze.de/scripts/vehiclekeychain/exports-server#getplayerkeys-playerid).

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The server side id of the player.

<mark style="color:green;">**Returns:**</mark>\
`table<table<string, int>>` - List of vehicles with their plate and model hash.\
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
