# Exports (client)

## StartOrbitCam

Starts the orbit camera.

<mark style="color:red;">**Parameters:**</mark>\
**position** - `vector3` - Initial position to focus on.\
**entity** - `integer?` - Entity to track. If set, **position** will be the offset to the entity.\
**minRadius** - `float?` - Minimum radius the camera will orbit at.\
**maxRadius** - `float?` - Maximum radius the camera will orbit at.\
**transitionSpeed** - `float?` - Time it takes for the transition from gameplay cam to orbit cam (in ms).\
**entityBone** - `integer?` - Bone to track. If set, **position** will be the offset to the bone.

```lua
local offset = vector3(0, 0, 0.5)
local entity = PlayerPedId()
exports["OrbitCam"]:StartOrbitCam(offset, entity)
```



***

## EndOrbitCam()

Stops the orbit camera.

```lua
exports["OrbitCam"]:EndOrbitCam()
```



***

## UpdateCamPosition

Sets the camera focus to a different position (or updates other values).

<mark style="color:red;">**Parameters:**</mark>\
**position** - `vector3` - Position to focus on.\
**entity** - `integer?` - Entity to track. If set, **position** will be the offset to the entity.\
**minRadius** - `float?` - Minimum radius the camera will orbit at.\
**maxRadius** - `float?` - Maximum radius the camera will orbit at.\
**entityBone** - `integer?` - Bone to track. If set, **position** will be the offset to the bone.

```lua
local newOffset = vector3(0.5, 0.5, 1.0)
local entity = PlayerPedId()
exports["OrbitCam"]:UpdateCamPosition(newOffset, entity)
```



***

## SetAutoOrbitSpeed

Sets the camera focus to a different position (or updates other values).

<mark style="color:red;">**Parameters:**</mark>\
**speed** - `float?` - Speed at which the camera should orbit. Set to `nil` to reset.\
**disablePlayerControls** - `boolean?` - If player controls should be disabled.

```lua
exports["OrbitCam"]:SetAutoOrbitSpeed(2.0, true)
```



***

## IsOrbitCamActive()

Check if the orbit cam is currently active.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True if the camera is currently active.

<pre class="language-lua"><code class="lang-lua"><strong>local isCamActive = exports["OrbitCam"]:IsOrbitCamActive()
</strong></code></pre>



***

## IsEntityBeingTracked(entity)

Checks if an entity is being tracked. Omitting **entity** parameter checks for any entity.

<mark style="color:red;">**Parameters:**</mark>\
**entity** - `integer?` - Entity to check.

<mark style="color:green;">**Returns:**</mark>\
`bool` - If the/any entity is being tracked.

<pre class="language-lua"><code class="lang-lua"><strong>local entity = PlayerPedId()
</strong><strong>local isTrackingPlayer = exports["OrbitCam"]:IsEntityBeingTracked(entity)
</strong></code></pre>



***

## GetTrackedEntity()

Returns the currently tracked entity.

<mark style="color:green;">**Returns:**</mark>\
`integer?` - The handle of the tracked entity or nil if there is none.

<pre class="language-lua"><code class="lang-lua"><strong>local trackedEntity = exports["OrbitCam"]:GetTrackedEntity()
</strong></code></pre>
