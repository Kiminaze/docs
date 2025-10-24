
# Exports (client)

## StartOrbitCam

Starts the orbit camera.

<font style="color:red;">**Parameters:**</font><br>
**position** - `vector3` - Initial position to focus on.<br>
**entity?** - `integer` - Entity to track. If set, **position** will be the offset to the entity.<br>
**minRadius?** - `float` - Minimum radius the camera will orbit at.<br>
**maxRadius?** - `float` - Maximum radius the camera will orbit at.<br>
**transitionSpeed?** - `float` - Time it takes for the transition from gameplay cam to orbit cam 
(in ms).<br>
**entityBone?** - `integer` - Bone to track. If set, **position** will be the offset to the bone.

```lua
local offset = vector3(0, 0, 0.5)
local entity = PlayerPedId()
exports["OrbitCam"]:StartOrbitCam(offset, entity)
```

***

## EndOrbitCam

Stops the orbit camera.

```lua
exports["OrbitCam"]:EndOrbitCam()
```

***

## UpdateCamPosition

Sets the camera focus to a different position (or updates other values).

<font style="color:red;">**Parameters:**</font><br>
**position** - `vector3` - Position to focus on.<br>
**entity?** - `integer` - Entity to track. If set, **position** will be the offset to the entity.<br>
**minRadius?** - `float` - Minimum radius the camera will orbit at.<br>
**maxRadius?** - `float` - Maximum radius the camera will orbit at.<br>
**entityBone?** - `integer` - Bone to track. If set, **position** will be the offset to the bone.

```lua
local newOffset = vector3(0.5, 0.5, 1.0)
local entity = PlayerPedId()
exports["OrbitCam"]:UpdateCamPosition(newOffset, entity)
```

***

## SetAutoOrbitSpeed

Sets the camera focus to a different position (or updates other values).

<font style="color:red;">**Parameters:**</font><br>
**speed?** - `float` - Speed at which the camera should orbit. Set to `nil` to reset.<br>
**disablePlayerControls?** - `boolean` - If player controls should be disabled.

```lua
exports["OrbitCam"]:SetAutoOrbitSpeed(2.0, true)
```

***

## IsOrbitCamActive

Check if the orbit cam is currently active.

<font style="color:green;">**Returns:**</font><br>
`bool` - True if the camera is currently active.

```lua
local isCamActive = exports["OrbitCam"]:IsOrbitCamActive()
```

***

## IsEntityBeingTracked

Checks if an entity is being tracked. Omitting **entity** parameter checks for any entity.

<font style="color:red;">**Parameters:**</font><br>
**entity?** - `integer` - Entity to check.

<font style="color:green;">**Returns:**</font><br>
`bool` - If the/any entity is being tracked.

```lua
local isTrackingPlayer = exports["OrbitCam"]:IsEntityBeingTracked(PlayerPedId())
```

***

## GetTrackedEntity

Returns the currently tracked entity.

<font style="color:green;">**Returns:**</font><br>
`integer?` - The handle of the tracked entity or nil if there is none.

```lua
local trackedEntity = exports["OrbitCam"]:GetTrackedEntity()
```
