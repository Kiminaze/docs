# Exports (client)

## StartClampingProcess

Starts looking for the closest vehicle wheel. If one is found the player character will move towards it and start the animation to attach the clamp.

If items are set up in the config, requires the `clampItemName` item and removes it upon successful use.

```lua
exports["VehicleClamp"]:StartClampingProcess()
```



***

## StartRemovalProcess

Starts looking for the closest vehicle wheel. If one is found and it has a clamp the player character will move towards it and start the animation to remove the clamp.

If items are set up in the config, requires the `removalToolItemName` and adds a `clampItemName` to the player's inventory.

```lua
exports["VehicleClamp"]:StartRemovalProcess()
```



***

## StartDestructionProcess

Starts looking for the closest vehicle wheel. If one is found and it has a clamp the player character will move towards it and start the animation to destroy the clamp.

If items are set up in the config, requires the `destroyItemName`.

```lua
exports["VehicleClamp"]:StartDestructionProcess()
```



***

## IsAnyWheelClamped

Checks if any wheel of the vehicle is clamped.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `int` - The handle of the vehicle to check.

<mark style="color:green;">**Returns:**</mark>\
`bool` - Returns true if any wheel is clamped.

```lua
local isAnyWheelClamped = exports["VehicleClamp"]:IsAnyWheelClamped(vehicle)
```



***

## IsWheelClamped

Checks if the specified wheel of the vehicle is clamped.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `int` - The handle of the vehicle to check.\
**wheelBone** - `string` - The name of the wheel bone to check.

<mark style="color:green;">**Returns:**</mark>\
`bool` - Returns true if the specified wheel is clamped.

```lua
local isWheelClamped = exports["VehicleClamp"]:IsAnyWheelClamped(vehicle, wheelBone)
```

<details>

<summary>Valid wheel bone names:</summary>

Front left: `wheel_lf`\
Front right: `wheel_rf`\
Rear left: `wheel_lr`\
Rear right: `wheel_rr`\
Middle left: `wheel_lm`, `wheel_lm1`, `wheel_lm2`, `wheel_lm3`\
Middle right: `wheel_rm`, `wheel_rm1`, `wheel_rm2`, `wheel_rm3`

</details>



***

## GetAllClampedWheels

Gets a list of all clamped wheels of a vehicle.

<mark style="color:red;">**Parameters:**</mark>\
**vehicle** - `int` - The handle of the vehicle to check.

<mark style="color:green;">**Returns:**</mark>\
`table<string>` - Returns a table containing all wheel bones (check IsWheelClamped for a list of bone names) that have a clamp attached.

```lua
local wheelList = exports["VehicleClamp"]:GetAllClampedWheels(vehicle)
```
