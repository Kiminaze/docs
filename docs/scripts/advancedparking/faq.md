
# FAQ

## Changing license plate text

<font style="color:red;">**Issue**</font>

Your vehicles respawn with the previous plate after changing their license plate text.

<font style="color:green;">**Solution**</font>

* Add the following line inside the fxmanifest of the respective resource:
    ```lua
    shared_script "@AdvancedParking/patches/fixPlateChange.lua"
    ```
* Restart your server or refresh the resource list and restart the respective resource after adding 
  the line.

This simply overwrites any call to `SetVehicleNumberPlateText` in that resource so that it uses 
AdvancedParking's functions instead.

***

## okokGarage outside vehicle detection

<font style="color:red;">**Issue**</font>

After a server restart vehicles that are still outside will be shown as parked and can be retrieved 
from of a garage multiple times.

<font style="color:green;">**Solution**</font>

* Add the following line inside the fxmanifest of `okokGarage`:
    ```lua
    shared_script "@AdvancedParking/patches/okokgarage.lua"
    ```
* Restart your server or refresh the resource list and restart the respective resource after adding 
  the line.

This patches the `takeOutVehicle` function to use AdvancedParking's function for checking outside 
vehicles.

***

## Qbox VehicleKeys

<font style="color:red;">**Issue**</font>

Missing keys after a server restart.

<font style="color:green;">**Solution**</font>

Change the `OnPlayerLoaded` function in the `server/keys.lua` from Qbox to this:

```lua
RegisterNetEvent("QBCore:Server:OnPlayerLoaded", function()
    local playerId = source
    local player = Player(playerId)
    if player then
        player.state:set('keysList', {}, true)
    end

    local citizenid = exports.qbx_core:GetPlayer(playerId).PlayerData.citizenid
    exports.oxmysql:execute("SELECT `plate` FROM `player_vehicles` WHERE `citizenid` = ?", { citizenid }, function(result)
        if not result then return end
        
        local keysGiven = false
        for i = 1, #result do
            local plate = result[i].plate
            local vehicles = GetAllVehicles()
            for j = 1, #vehicles do
                if GetVehicleNumberPlateText(vehicles[j]) == plate then
                    -- Pass true as skipNotification to prevent multiple notifications
                    if GiveKeys(playerId, vehicles[j], true) then
                        keysGiven = true
                    end
                    if debug then
                        print(string.format('[vehiclekeys] Giving keys to %s for plate %s', citizenid, plate))
                    end
                    break
                end
            end
        end

        if keysGiven then
            exports.qbx_core:Notify(playerId, locale('notify.keys_taken'))
        end
    end)
end)
```

And change the `GiveKeys` function in the `server/keys.lua` from Qbox to this:

```lua
function GiveKeys(source, vehicle, skipNotification)
    local citizenid = getCitizenId(source)
    if not citizenid then return end

    local player = Player(source)
    if not player then return end

    local vehicleEntity = Entity(vehicle)
    if not vehicleEntity?.state then return end

    local sessionId = vehicleEntity.state.sessionId or exports.qbx_core:CreateSessionId(vehicle)
    local keys = player.state.keysList or {}
    if keys[sessionId] then return end

    keys[sessionId] = true

    player.state:set('keysList', keys, true)
    if not skipNotification then
        exports.qbx_core:Notify(source, locale('notify.keys_taken'))
    end
    return true
end
```

***

## qb-vehiclekeys notification spam on connect

<font style="color:red;">**Issue**</font>

When connecting to a server AdvancedParking causes a notification to pop up for every single 
vehicle of the player that is outside right now since `qb-vehiclekeys` has no way to suppress the 
"GiveKeys" notification.

<font style="color:green;">**Solution**</font>

* Add the following line inside the fxmanifest of `qb-vehiclekeys`:
    ```lua
    shared_script "@AdvancedParking/patches/qb-vehiclekeys.lua"
    ```
* Restart your server or refresh the resource list and restart the respective resource after adding 
  the line.

This patches the `GiveKeys` function and adds a third parameter that allows preventing the 
notification.

***

## GG Garage Job

<font style="color:red;">**Issue**</font>

It uses a specific function to delete vehicles. Because of that, the 
[usual fix](installation.md#deleting-vehicles) will not work for this script.

<font style="color:green;">**Solution**</font>

Find the function `gg.vehicleManager.removeVehicle` inside its files and add the following code 
right after the first line:

```lua
if (GetResourceState("AdvancedParking") == "started") then
    exports["AdvancedParking"]:DeleteVehicle(entity)
    return
end
```

<details>
<summary>Should look like this:</summary>

```lua
gg.vehicleManager.removeVehicle = function(entity)
    if (GetResourceState("AdvancedParking") == "started") then
        exports["AdvancedParking"]:DeleteVehicle(entity)
        return
    end

    NetworkRequestControlOfEntity(entity)
    local timeout = 2000
    while timeout > 0 and not NetworkHasControlOfEntity(entity) do
        Wait(100)
        timeout = timeout - 100
    end
    SetEntityAsMissionEntity(entity, true, true)
    local timeout = 2000
    while timeout > 0 and not IsEntityAMissionEntity(entity) do
        Wait(100)
        timeout = timeout - 100
    end
    Citizen.InvokeNative( 0xEA386986E786A54F, Citizen.PointerValueIntInitialized( entity ) )
    if ( DoesEntityExist( entity ) ) then 
        DeleteEntity(entity)
        if ( DoesEntityExist( entity ) ) then     
            return false
        else 
            return true
        end
    else 
        return true
    end 
end
```

</details>
