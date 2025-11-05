
# Exports (client)

## GetVehicleDeformation

Gets the vehicles deformation in a table.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `number` - The handle of the vehicle.

<font style="color:green;">**Returns:**</font><br>
`table<table<offset: vector3, damage: number>>` - List of offsets from the vehicle and the relative 
damage.

```lua
local deformation = exports["VehicleDeformation"]:GetVehicleDeformation(vehicle)
```

***

## SetVehicleDeformation

Sets the deformation on a vehicle.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `number` - The handle of the vehicle.<br>
**deformation** - `table<table<offset: vector3, damage: vector3>>` - The deformation values.

```lua
exports["VehicleDeformation"]:GetVehicleDeformation(vehicle, deformation)
```

***

## FixVehicleDeformation

Fixes the deformation of a vehicle.

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `number` - The handle of the vehicle.

```lua
exports["VehicleDeformation"]:FixVehicleDeformation(vehicle)
```

***

## IsDeformationWorse

Compares both deformation tables and returns if the first one is worse than the second.

<font style="color:red;">**Parameters:**</font><br>
**firstDeformation** - `table<table<offset: vector3, damage: number>>` - The first deformation 
table.<br>
**secondDeformation** - `table<table<offset: vector3, damage: number>>` - The second deformation 
table.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if the first deformation is worse than the second one.

```lua
local isWorse = exports["VehicleDeformation"]:IsDeformationWorse(firstDeformation, secondDeformation)
```

***

## IsDeformationEqual

Compares both deformation tables and returns if they are equal.

<font style="color:red;">**Parameters:**</font><br>
**firstDeformation** - `table<table<offset: vector3, damage: number>>` - The first deformation 
table.<br>
**secondDeformation** - `table<table<offset: vector3, damage: number>>` - The second deformation 
table.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if both deformation tables are equal.

```lua
local isWorse = exports["VehicleDeformation"]:IsDeformationEqual(firstDeformation, secondDeformation)
```

***

## GetDeformationOffsets(vehicle)

Returns all offsets for a specified vehicle

<font style="color:red;">**Parameters:**</font><br>
**vehicle** - `number` - The handle of the vehicle.

<font style="color:green;">**Returns:**</font><br>
`table<vector3>` - A table containing all offsets around a vehicle.

```lua
local offsets = exports["VehicleDeformation"]:GetDeformationOffsets(vehicle)
```
