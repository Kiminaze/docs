# Exports (client)

## OpenInventory

Opens the key inventory for the player. If the menu is open, it will be closed instead.

<pre class="language-lua"><code class="lang-lua"><strong>exports["VehicleKeyChain"]:OpenInventory()
</strong></code></pre>



***

## GetPlayerKeys

Returns a list containing all player keys.

<mark style="color:green;">**Returns:**</mark>\
`table<table<plate: string, count: int, model: int>>` - List of keys with their plate, count and associated model.

```lua
local keys = exports["VehicleKeyChain"]:GetPlayerKeys()
for i = 1, #keys do
	print("Plate:", keys[i].plate)
	print("Count:", keys[i].count)
	print("ModelHash:", keys[i].model)
	print("")
end
```



***

## GetPlayerVehicles

Returns a list of all vehicles a player owns.

<mark style="color:green;">**Returns:**</mark>\
`table<table<string, int>>` - List of vehicles with their plate and model hash.

<pre class="language-lua"><code class="lang-lua"><strong>local vehicleList = exports["VehicleKeyChain"]:GetPlayerVehicles()
</strong>for i = 1, #vehicleList do
	print("Plate:", vehicleList[i][1])
	print("ModelHash:", vehicleList[i][2])
	print("")
end
</code></pre>



***

## GetPlayerVehiclesAndKeys

Returns a list of all vehicles a player owns.

<mark style="color:green;">**Returns:**</mark>\
`table<table<string, int>>` - List of vehicles with their plate and model hash.\
`table<table<string, int, int>>` - List of keys with their plate, count and associated model.

<pre class="language-lua"><code class="lang-lua"><strong>local vehicleList, keys = exports["VehicleKeyChain"]:GetPlayerVehicles()
</strong>for i = 1, #vehicleList do
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
</code></pre>



***

## GetPlayerVehiclesAndKeyCount

Returns a list of all vehicles a player owns including the amount of keys.

<mark style="color:green;">**Returns:**</mark>\
`table<table<string, int, int>>` - List of vehicles with their plate, model hash and key count.

<pre class="language-lua"><code class="lang-lua"><strong>local vehicleList = exports["VehicleKeyChain"]:GetPlayerVehiclesAndKeyCount()
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

<mark style="color:green;">**Returns:**</mark>\
`dictionary<string, int>` - Plates associated with a model (or -1 if no model).

<pre class="language-lua"><code class="lang-lua"><strong>local tempKeys = exports["VehicleKeyChain"]:GetPlayerTempKeys()
</strong>for plate, model in pairs(tempKeys) do
	print("Plate:", plate)
	print("Model:", model)
	print("")
end
</code></pre>



***

## IsVehicleOwner

Check if a player is the owner of a vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `int` - A vehicle handle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isVehicleOwner = exports["VehicleKeyChain"]:IsVehicleOwner(vehicle)
</strong></code></pre>



***

## IsKeyOwner

Check if a player is the owner of a key for a vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `int` - A vehicle handle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is key owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isKeyOwner = exports["VehicleKeyChain"]:IsKeyOwner(vehicle)
</strong></code></pre>



***

## IsVehicleOrKeyOwner

Check if a player is the owner of a vehicle or a key for the vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `int` - A vehicle handle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if player is owner.

<pre class="language-lua"><code class="lang-lua"><strong>local isOwner = exports["VehicleKeyChain"]:IsVehicleOrKeyOwner(vehicle)
</strong></code></pre>



***

## ToggleLock

Toggles the lock of the closest and owned vehicle.

<pre class="language-lua"><code class="lang-lua"><strong>exports["VehicleKeyChain"]:ToggleLock()
</strong></code></pre>
