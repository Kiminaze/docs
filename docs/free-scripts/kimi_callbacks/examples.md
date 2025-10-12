# Examples

In these examples, we will register and trigger a server callback that can get a vehicles position from its plate across the whole map and we will register a client callback that retrieves the distance from a player to a specified position.

## Client side

```lua
-- create shortcut
local CB = exports["kimi_callbacks"]

-- register callback to get the players distance to a specified position
CB:Register("getPlayerDistanceToPosition", function(position)
    local playerPosition = GetEntityCoords(PlayerPedId())
    return #(playerPosition - position)
end)

-- function that triggers a callback to receive the position of a vehicle
function GetVehiclePositionFromServer(plate)
    local position = CB:Trigger("getVehiclePositionFromPlate", plate)
    return position
end
```

## Server side

```lua
-- create shortcut
local CB = exports["kimi_callbacks"]

-- register a callback to get a vehicles position from its plate
CB:Register("getVehiclePositionFromPlate", function(playerId, plate)
    local vehicles = GetAllVehicles()
    for i = 1, #vehicles do
        if (DoesEntityExist(vehicles[i])) then
            if (GetVehicleNumberPlateText(vehicles[i]) == plate)) then
                return GetEntityCoords(vehicles[i])
            end
        end
    end
    
    return nil
end)

-- function that triggers a callback to receive the players distance 
--    to a specified position
function GetPlayerDistanceToPosition(playerId, position)
    local distance = CB:Trigger("getPlayerDistanceToPosition", playerId, position)
    return distance
end
```
