# Exports (client)

## GetVehicleDeformation(vehicle)

Gets the vehicles deformation in a table.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `number` - The handle of the vehicle.

<mark style="color:green;">**Returns:**</mark>\
`table<table<offset: vector3, damage: number>>` - List of offsets from the vehicle and the relative damage.



***

## SetVehicleDeformation(vehicle, deformation)

Sets the deformation on a vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `number` - The handle of the vehicle.\
**deformation** - `table<table<offset: vector3, damage: vector3>>` - The deformation values.



***

## FixVehicleDeformation(vehicle)

Fixes the deformation of a vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `number` - The handle of the vehicle.



***

## IsDeformationWorse(firstDeformation, secondDeformation)

Compares both deformation tables and returns if the first one is worse than the second.

<mark style="color:red;">**Parameters:**</mark>\
**firstDeformation** - `table<table<offset: vector3, damage: number>>` - The first deformation table.\
**secondDeformation** - `table<table<offset: vector3, damage: number>>` - The second deformation table.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if the first deformation is worse than the second one.



***

## IsDeformationEqual(firstDeformation, secondDeformation)

Compares both deformation tables and returns if they are equal.

<mark style="color:red;">**Parameters:**</mark>\
**firstDeformation** - `table<table<offset: vector3, damage: number>>` - The first deformation table.\
**secondDeformation** - `table<table<offset: vector3, damage: number>>` - The second deformation table.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if both deformation tables are equal.



***

## GetDeformationOffsets(vehicle)

Returns all offsets for a specified vehicle

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `number` - The handle of the vehicle.

<mark style="color:green;">**Returns:**</mark>\
`table<vector3>` - A table containing all offsets around a vehicle.
