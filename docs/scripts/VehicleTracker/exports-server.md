# Exports (server)

## StartTracker

Starts tracking the vehicle with the specified plate for a player.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The player id of the player to start the tracker for.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success.

```lua
local success = exports["VehicleTracker"]:StartTracker(playerId, plate)
```

***

## StopTracker

Stops tracking the vehicle with the specified plate for a player.

<font style="color:red;">**Parameters:**</font><br>
**playerId** - `int` - The player id of the player to stop the tracker for.<br>
**plate** - `string` - The license plate text of a vehicle.

<font style="color:green;">**Returns:**</font><br>
`bool` - True on success.

```lua
local success = exports["VehicleTracker"]:StopTracker(playerId, plate)
```
