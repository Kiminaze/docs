
---
description: Frequently Asked Questions
---

# FAQ

## Changing license plate text

There are some minor problems when updating a vehicle's plate. In order to fix those, you will need 
to **exchange** the function `SetVehicleNumberPlateText` with the following export:

```lua
exports["AdvancedParking"]:UpdatePlate
```

The variables in the parenthesis at the end should stay the same! Do not remove them!

```lua title="Example"
SetVehicleNumberPlateText(vehicle, "TEST1234")
-- into this:
exports["AdvancedParking"]:UpdatePlate(vehicle, "TEST1234")
```

In case of this being done on server side, you need to use the [server side export](exports-server.md#updateplate) 
instead.

***

## qb-vehiclekeys

<font style="color:red;">**Issue**</font>

qb-vehiclekeys doesn't properly recognize owned vehicles after a server restart. You cannot 
(un)lock them.

<font style="color:green;">**Solution**</font>

Add the following snippet at the bottom of your `qb-vehiclekeys/server/main.lua` and restart your 
server.

```lua
RegisterNetEvent("QBCore:Server:OnPlayerLoaded", function()
    local playerId = source
    local citizenid = QBCore.Functions.GetPlayer(playerId).PlayerData.citizenid
    exports["oxmysql"]:execute([[
        SELECT `plate` 
            FROM `player_vehicles` 
            WHERE `citizenid` = ?;
    ]], { citizenid }, function(result)
        for i = 1, #result do
            local plate = result[i].plate
            if (not VehicleList[plate]) then
                VehicleList[plate] = {}
            end
            VehicleList[plate][citizenid] = true
            TriggerClientEvent("qb-vehiclekeys:client:AddKeys", playerId, plate)
        end
    end)
end)
```

***

## okokGarage keys

<font style="color:red;">**Issue**</font>

Same as `qb-vehiclekeys`. It doesn't properly recognize owned vehicles after a server restart. You 
cannot (un)lock them.

<font style="color:green;">**Solution (for ESX)**</font>

Add the following snippet at the bottom of the `sv_utils.lua` inside `okokGarage`.

```lua
RegisterNetEvent("okok:server:CheckOwnerExt", function()
    local playerId = source
    local xPlayer = ESX.GetPlayerFromId(playerId)
    MySQLfetchAll([[
        SELECT owner, plate 
            FROM owned_vehicles 
            WHERE owner = ? OR owner = ?;
    ]], { xPlayer.identifier, xPlayer.job.name }, function(result)
        for i = 1, #result do
            if (exports["AdvancedParking"]:GetVehiclePosition(result[i].plate)) then
                TriggerEvent("okokGarage:GiveKeys", result[i].plate, playerId)
            end
        end
    end)
end)
```

And add the following snippet at the bottom of the `cl_utils.lua` inside `okokGarage`.

```lua
AddEventHandler("esx:onPlayerSpawn", function()
    TriggerServerEvent("okok:server:CheckOwnerExt")
end)
```

<font style="color:green;">**Solution (for QB)**</font>

Add the following snippet at the bottom of the `sv_utils.lua` inside `okokGarage`.

```lua
RegisterNetEvent("okok:server:CheckOwnerExt", function()
    local playerId = source
    local Player = QBCore.Functions.GetPlayer(playerId)
    exports["oxmysql"]:execute([[
        SELECT citizenid, plate 
            FROM player_vehicles 
            WHERE citizenid = ?;
    ]], { Player.PlayerData.citizenid }, function(result)
        for i = 1, #result do
            if (exports["AdvancedParking"]:GetVehiclePosition(result[i].plate)) then
                TriggerEvent("okokGarage:GiveKeys", result[i].plate, tonumber(playerId))
            end
        end
    end)
end)
```

And add the following snippet at the bottom of the `cl_utils.lua` inside `okokGarage`.

```lua
AddEventHandler("QBCore:Client:OnPlayerLoaded", function()
    TriggerServerEvent("okok:server:CheckOwnerExt")
end)
```

***

## okokGarage outside vehicle detection

<font style="color:red;">**Issue**</font>

After a server restart vehicles that are still outside will be shown as parked and can be gotten 
out of a garage multiple times.

<font style="color:green;">**Solution**</font>

Make sure to disable okokGarage's config option called `Config.SetVehicleImpoundAfter` by setting 
it to `0`.

Then find the function `takeOutVehicle` inside okokGarage's sv_utils.lua and add the following code 
as the first line:

```lua
if (exports["AdvancedParking"]:GetVehiclePosition(vehicle_plate)) then
    TriggerClientEvent(Config.EventPrefix..':notification', _source, _L('vehicle_isnt_stored').title, _L('vehicle_isnt_stored').text, _L('vehicle_isnt_stored').time, _L('vehicle_isnt_stored').type)
    return
end
```

<details>
<summary>Should look like this:</summary>

```lua
function takeOutVehicle(db, _source, vehicle_plate, vehicle_id, index, vehicle_name, garageName, isSociety)
    if (exports["AdvancedParking"]:GetVehiclePosition(vehicle_plate)) then
        TriggerClientEvent(Config.EventPrefix..':notification', _source, _L('vehicle_isnt_stored').title, _L('vehicle_isnt_stored').text, _L('vehicle_isnt_stored').time, _L('vehicle_isnt_stored').type)
        return
    end
```

</details>

***

## cd_garage DeleteVehicle

<font style="color:red;">**Issue**</font>

`cd_garage` uses a sort of weird function to delete vehicles. Because of that, the 
[usual fix](installation.md#deleting-vehicles) will not work for this script.

<font style="color:green;">**Solution**</font>

Make sure to disable cd_garage's built-in persistence feature in their config.

Add a `Wait(1000)` in between lines 113/114 inside `AdvancedParking/client/client.lua`.

<details>
<summary>Should look like this:</summary>

```lua
-- when a player left a vehicle
function LeftVehicle(vehicle)
    Wait(1000)
    if (not DoesEntityExist(vehicle) or not NetworkGetEntityIsNetworked(vehicle) or IsVehicleBlacklisted(vehicle)) then
```

</details>

Find the function `CD_DeleteVehicle` inside `cd_garage/client/functions.lua` and add the following 
code right after the first line:

```lua
if (GetResourceState("AdvancedParking") == "started") then
    exports["AdvancedParking"]:DeleteVehicle(vehicle)
    return
end
```

<details>
<summary>Should look like this:</summary>

```lua
function CD_DeleteVehicle(vehicle)
    if (GetResourceState("AdvancedParking") == "started") then
        exports["AdvancedParking"]:DeleteVehicle(vehicle)
        return
    end

    if vehicle ~= nil then
        if not DoesEntityExist(vehicle) then
            Notif(3, 'entity_doesnot_exist')
            return
        end
        RemovePersistentVehicle(vehicle, GetPlate(vehicle))
        RequestNetworkControl(vehicle)
        RequestNetworkId(vehicle)
        if NetworkHasControlOfEntity(vehicle) then
            SetEntityAsMissionEntity(vehicle)
            SetVehicleHasBeenOwnedByPlayer(vehicle, true)
            Wait(100)
            Citizen.InvokeNative(0xEA386986E786A54F, Citizen.PointerValueIntInitialized(vehicle))
            SetEntityAsNoLongerNeeded(vehicle)
            DeleteEntity(vehicle)
            DeleteVehicle(vehicle)
        else
            TriggerServerEvent('cd_garage:DeleteVehicleADV', NetworkGetNetworkIdFromEntity(vehicle))
        end
    end
end
```

</details>

***

## JG Advanced Garages

<font style="color:red;">**Issue**</font>

When enabling `Cleanup.storeVehicles` vehicles won't be stored properly.

<font style="color:green;">**Solution**</font>

Add the missing columns to the query inside `AdvancedParking/server/storage/oxmysql.lua` and change 
`"Legion Square"` to the name of the garage.

You can simply replace `Storage.StoreVehicleInGarage` with the following:

```lua
Storage.StoreVehicleInGarage = function(params)
    params = { "Legion Square", params[1], params[2] }
    oxmysql:update(([[
        UPDATE `%s` SET `%s` = 1, `in_garage` = 1, `garage_id` = ?
            WHERE `plate` = ? OR `plate` = ?;
    ]]):format(GetOwnedVehiclesTableName(), GetStoredColumnName()), params)
end
```

***

## JG Garage + qb-vehiclekeys

<font style="color:red;">**Issue**</font>

When using `qb-vehiclekeys` in tandem with JG's garage, players will lose their keys to job-owned 
vehicles after a server restart.

<font style="color:green;">**Solution**</font>

A slightly different version of [this fix](#qb-vehiclekeys). This should be added at the bottom of 
`qb-vehiclekeys/server/main.lua`:

```lua
RegisterNetEvent("QBCore:Server:OnPlayerLoaded", function()
    local playerId = source
    local playerData = QBCore.Functions.GetPlayer(playerId).PlayerData
    local citizenid = playerData.citizenid
    exports["oxmysql"]:execute([[
        SELECT `plate` 
            FROM `player_vehicles` 
            WHERE `citizenid` = ? OR `citizenid` = ?;
    ]], { citizenid, playerData.job.name }, function(result)
        for i = 1, #result do
            local plate = result[i].plate
            if (not VehicleList[plate]) then
                VehicleList[plate] = {}
            end
            VehicleList[plate][citizenid] = true
            TriggerClientEvent("qb-vehiclekeys:client:AddKeys", playerId, plate)
        end
    end)
end)
```

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

***

## Jaksam vehicle_keys

<font style="color:red;">**Issue**</font>

Missing keys after a server restart.

<font style="color:green;">**Solution**</font>

Add the following code to `AdvancedParking/client/cl_integrations.lua`:

```lua
AddEventHandler("esx:onPlayerSpawn",function(xPlayer, isNew, skin)
    TriggerServerEvent("AP:checkKeys")
end)
```

And this to `AdvancedParking/server/sv_integrations.lua`:

```lua
RegisterNetEvent("AP:checkKeys", function()
    local ESX = exports["es_extended"]:getSharedObject()
    local playerData = ESX.GetPlayerFromId(source)
    local identifier = playerData.identifier
    local job = playerData.getJob().name
    exports["oxmysql"]:query([[
        SELECT `plate` 
            FROM `owned_vehicles` 
            WHERE `owner` = ? OR `owner` = ?;
    ]], { identifier, job }, function(results)
        for i, row in ipairs(results) do
            if (exports["AdvancedParking"]:GetVehiclePosition(row.plate)) then
                exports["vehicles_keys"]:giveVehicleKeysToIdentifier(identifier, row.plate, "temporary")
            end
        end
    end)
end)
```

***

## Renewed-VehicleKeys

<font style="color:red;">**Issue**</font>

Missing keys after a server restart.

<font style="color:green;">**Solution**</font>

Add this code to `utils/server.lua` in renewed-vehiclekeys:

```lua
RegisterNetEvent("QBCore:Server:OnPlayerLoaded", function()
    local playerId = source
    local citizenid = exports.qbx_core:GetPlayer(playerId).PlayerData.citizenid
    exports["oxmysql"]:execute("SELECT `plate` FROM `player_vehicles` WHERE `citizenid` = ?", { citizenid }, function(result)
        for i = 1, #result do
            exports["Renewed-Vehiclekeys"]:addKey(playerId, result[i].plate)
        end
    end)
end)
```

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

## Wasabi Carlock (ESX)

<font style="color:red;">**Issue**</font>

Missing keys after a server restart.

<font style="color:green;">**Solution**</font>

Add the following code to `AdvancedParking/client/cl_integrations.lua`:

```lua
AddEventHandler("esx:onPlayerSpawn", function()
    TriggerServerEvent("AP:checkKeys")
end)
```

And this code to `AdvancedParking/server/sv_integrations.lua`:

```lua
RegisterNetEvent("AP:checkKeys", function()
    local playerId = source
    local ESX = exports["es_extended"]:getSharedObject()
    local xPlayer = ESX.GetPlayerFromId(playerId)
    exports["oxmysql"]:execute([[
        SELECT `plate`
            FROM `owned_vehicles`
            WHERE `owner` = ? OR `owner` = ?;
    ]], { xPlayer.identifier, xPlayer.job.name }, function(result)
        for i = 1, #result do
            if (exports["AdvancedParking"]:GetVehiclePosition(result[i].plate)) then
                exports["wasabi_carlock"]:GiveKey(playerId, result[i].plate)
            end
        end
    end)
end)
```
