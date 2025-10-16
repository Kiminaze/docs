
# Exports (client)

## OpenInventory

Opens the key inventory for the player. If the menu is open, it will be closed instead.

```lua
exports["VehicleKeyChain"]:OpenInventory()
```

***

## GetPlayerKeys

Returns a list containing all player keys.

<font style="color:green;">**Returns:**</font><br>
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

<font style="color:green;">**Returns:**</font><br>
`table<table<string, int>>` - List of vehicles with their plate and model hash.

```lua
local vehicleList = exports["VehicleKeyChain"]:GetPlayerVehicles()
for i = 1, #vehicleList do
	print("Plate:", vehicleList[i][1])
	print("ModelHash:", vehicleList[i][2])
	print("")
end
```

***

## GetPlayerVehiclesAndKeys

Returns a list of all vehicles a player owns.

<font style="color:green;">**Returns:**</font><br>
`table<table<string, int>>` - List of vehicles with their plate and model hash.<br>
`table<table<string, int, int>>` - List of keys with their plate, count and associated model.

```lua
local vehicleList, keys = exports["VehicleKeyChain"]:GetPlayerVehicles()
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

***

## GetPlayerVehiclesAndKeyCount

Returns a list of all vehicles a player owns including the amount of keys.

<font style="color:green;">**Returns:**</font><br>
`table<table<string, int, int>>` - List of vehicles with their plate, model hash and key count.

```lua
local vehicleList = exports["VehicleKeyChain"]:GetPlayerVehiclesAndKeyCount()
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

<font style="color:green;">**Returns:**</font><br>
`dictionary<string, int>` - Plates associated with a model (or -1 if no model).

```lua
local tempKeys = exports["VehicleKeyChain"]:GetPlayerTempKeys()
for plate, model in pairs(tempKeys) do
	print("Plate:", plate)
	print("Model:", model)
	print("")
end
```

***

## IsVehicleOwner

Check if a player is the owner of a vehicle.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - A vehicle handle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is owner.

```lua
local isVehicleOwner = exports["VehicleKeyChain"]:IsVehicleOwner(vehicle)
```

***

## IsKeyOwner

Check if a player is the owner of a key for a vehicle.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - A vehicle handle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is key owner.

```lua
local isKeyOwner = exports["VehicleKeyChain"]:IsKeyOwner(vehicle)
```

***

## IsVehicleOrKeyOwner

Check if a player is the owner of a vehicle or a key for the vehicle.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `int` - A vehicle handle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if player is owner.

```lua
local isOwner = exports["VehicleKeyChain"]:IsVehicleOrKeyOwner(vehicle)
```

***

## ToggleLock

Toggles the lock of the closest and owned vehicle.

```lua
exports["VehicleKeyChain"]:ToggleLock()
```
