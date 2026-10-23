
# Configuration

## Cleanup

The cleanup is a function for deleting vehicles from the world and AP's database table 
(`vehicle_parking`), depending on your settings. The cleanup will be performed after a server or 
script restart if you set `onScriptRestart = true` and/or `onServerStart = true`. A cleanup will 
also be performed when you add `times = {}` in the config.

The cleanup is separated into three categories:

* **owned:** Only player owned vehicles (from `owned_vehicles`/`player_vehicles` table).
* **saved:** Vehicles that are saved but not player owned.
* **all:** Any other vehicle not included above.

It will not remove all data from the database and not all vehicles from the server. Only vehicles 
that match the cleanup conditions will be removed.

***

### timeThreshold

The timeThreshold is just the holding time for a vehicle. It doesn't matter how often or when you 
perform a cleanup, it will not affect whether a cleanup occurs.

As long as timeThreshold is not nil, it will be checked during a cleanup. Every vehicle that is 
saved will be checked against the timeThreshold. If a vehicle has been standing in the world 
without an update (e.g. enter/exit, damage taken etc) for a timeperiod equal or higher than 
timeThreshold, it will be removed from the world.

<div class="content-box" markdown="1">
<div class="tabs">
<div class="tab">timeThreshold = nil</div>
<div class="tab">timeThreshold = 0</div>
<div class="tab">timeThreshold = 6</div>
</div>

<div class="tab-content" markdown="1">
**No vehicle will be deleted due to time constraints.**

* Server restarts at midnight and cleanup is activated on server start.
* Vehicle A was last updated at 11 p.m.
* Vehicle B was last updated at 2 p.m.

**Result:** Vehicle A and B will not be removed and will remain saved.
</div>
<div class="tab-content" markdown="1">
**All vehicle will be deleted due to time constraints.**

* Server restarts at midnight and cleanup is activated on server start.
* Vehicle A was last updated at 11 p.m.
* Vehicle B was last updated at 2 p.m.

**Result:** Both vehicles will be removed.
</div>
<div class="tab-content" markdown="1">
**Some vehicle will be deleted due to time constraints.**

* Server restarts at midnight and cleanup is activated on server start.
* Vehicle A was last updated at 11 p.m.
* Vehicle B was last updated at 2 p.m.

**Result:** Only vehicle B will be removed as it has not been updated for the past 6 hours.
</div>
</div>

***

### engineThreshold

The engineThreshold is simply the minimum health required for a vehicle.

As long as engineThreshold is not nil, it will be checked during a cleanup. All vehicles that have 
engine health equal to or below the engineThreshold will be removed.

<div class="content-box" markdown="1">
<div class="tabs">
<div class="tab">engineThreshold = 700.0 and allVehicles = false</div>
<div class="tab">engineThreshold = 700.0 and allVehicles = true</div>
<div class="tab">engineThreshold = nil and allVehicles = true or false</div>
</div>

<div class="tab-content" markdown="1">
**Only saved vehicle will be deleted due to damage.**

* Server restarts and cleanup is activated at server start.
* Vehicle A has 900 engine health and is not saved.
* Vehicle B has 960 engine health and is saved.
* Vehicle C has 450 engine health and is not saved.
* Vehicle D has 560 engine health and is saved.

**Result:** Vehicle A will stay. Vehicle B will stay. Vehicle C will stay. Vehicle D will be removed.
</div>
<div class="tab-content" markdown="1">
**All vehicle will be deleted due to damage.**

* Server restarts and cleanup is activated at server start.
* Vehicle A has 900 engine health and is not saved.
* Vehicle B has 960 engine health and is saved.
* Vehicle C has 450 engine health and is not saved.
* Vehicle D has 560 engine health and is saved.

**Result:** Vehicle A will stay. Vehicle B will stay. Vehicle C will be removed. Vehicle D will be 
removed.
</div>
<div class="tab-content" markdown="1">
**No vehicle will be deleted due to damage.**

* Server restarts and cleanup is activated at server start.
* Vehicle A has 900 engine health and is not saved.
* Vehicle B has 960 engine health and is saved.
* Vehicle C has 450 engine health and is not saved.
* Vehicle D has 560 engine health and is saved.

**Result:** Vehicle A will stay. Vehicle B will stay. Vehicle C will stay. Vehicle D will stay.
</div>
</div>

***

### distanceThreshold

The distanceThreshold is the minimum distance between player and vehicle.

As long as distanceThreshold is not nil, it will be checked during a cleanup. Every saved vehicle 
will be checked for its distance to the closest player. All vehicles further away than the 
distanceThreshold from any player will be removed.

<div class="content-box" markdown="1">
<div class="tabs">
<div class="tab">distanceThreshold = 100 and allVehicles = false</div>
<div class="tab">distanceThreshold = 100 and allVehicles = true</div>
<div class="tab">distanceThreshold = nil and allVehicles = true or false</div>
</div>

<div class="tab-content" markdown="1">
**Only saved vehicle will be deleted due to distance from player.**

* Server restarts and cleanup is activated at server start.
* Vehicle A is 200 meters away from a player and is not saved.
* Vehicle B is 300 meters away from a player and is saved.
* Vehicle C is 90 meters away from a player and is not saved.
* Vehicle D is 80 meters away from a player and is saved.

**Result:** Vehicle A will stay. Vehicle B will be removed. Vehicle C will stay. Vehicle D will 
stay.
</div>
<div class="tab-content" markdown="1">
**All vehicle will be deleted due to distance from player.**

* Server restarts and cleanup is activated at server start.
* Vehicle A is 200 meters away from a player and is not saved.
* Vehicle B is 300 meters away from a player and is saved.
* Vehicle C is 90 meters away from a player and is not saved.
* Vehicle D is 80 meters away from a player and is saved.

**Result:** Vehicle A will be removed. Vehicle B will be removed. Vehicle C will stay. Vehicle D 
will stay.
</div>
<div class="tab-content" markdown="1">
**No vehicle will be deleted due to distance from player.**

* Server restarts and cleanup is activated at server start.
* Vehicle A is 200 meters away from a player and is not saved.
* Vehicle B is 300 meters away from a player and is saved.
* Vehicle C is 90 meters away from a player and is not saved.
* Vehicle D is 80 meters away from a player and is saved.

**Result:** Vehicle A will stay. Vehicle B will stay. Vehicle C will stay. Vehicle D will stay.
</div>
</div>

***

### submergedVehicles

The submergedVehicles setting determines whether vehicles submerged underwater will be removed when 
AP is trying to respawn them. It will not remove the vehicle on a cleanup.

* If submergedVehicles = false, no submerged vehicles will be removed.
* If submergedVehicles = true and allVehicles = false, only saved vehicles will be removed if they 
are submerged.
* If submergedVehicles = true and allVehicles = true, all submerged vehicles will be removed.

***

### zones

All vehicle in this zones will always be removed on a cleanup, without any other conditions.

* `{ position = vector3(0, 0, 0), radius = 10.0 }` -> This will remove vehicle around the map 
center in a 10 meter radius.

***

### ignoredZones

All vehicle in this sone will always be ignored by the cleanup, they will not be checked for any 
other condition.

* `{ position = vector3(0, 0, 0), radius = 10.0 }` -> This will remove vehicle around the map 
center in a 10 meter radius.

***

### ignoredPlates

Plates listed will be ignored and not removed. They can include partial strings and are not case 
sensitive.

* "XYZ 404 ", "404",

If you have this plates ignored, it will ignore a vehicle with the plate: "XYZ 404 " or with a 
plate like "abc 404 ". The first plate is the exact same string as the first entry in the ignore 
list. The second plate contains a partial string that is an entry in your ignore list.

Plates that would not be ignored as an example: "XYZ 403 " or "abc 40 4".
No plate is matching with the first entry and no plate contains partials from the second entry.

***

### ignoredModels

Vehicle with ignored models will be ignored and not removed.
They need to be written in \`blista\` and not like "blista"! These symboles are called 
`grave accent` or `backtick`.

***

### storeVehicles

Send (owned) vehicles to e.g. garage or impound on cleanup.
Some garages might not work out of the box. Check our [FAQ](faq.md) for potential changes for your 
scripts.

***

### onServerStart

When set to `true` the cleanup process will run on server startup when the resource is starting. It 
will not run on a script restart.

Can be used in conjunction with onScriptRestart to do both.

***

### onScriptRestart

When set to `true` the cleanup process will run on any _restart_ of AdvancedParking. It will not 
run on server startup.

Can be used in conjunction with onServerStart to do both.

***

### times

You can set times were a cleanup should be done automatic.
This uses system time of the server. You can set it daily or weekly.

* `{ hour = 3, minute = 0 }` -> Every day at 3 am.
* `{ day = 3, hour = 16, minute = 0 }` -> Every wednesday at 4 pm.

***

### notificationTimes

When players should be notified before a cleanup (in minutes) is done.

***

### timeLeftNotification

Notification text to show players before a cleanup (use %s as placeholder for time left in minutes).
If you want to use a custom notification, take look at `cl_integrations.lua`.

***

### deleteNotification

Notification text to show players when the cleanup is done.
If you want to use a custom notification, take look at `cl_integrations.lua`.

***

## SaveExtraValues

Defines additional values that will be saved.

### roofState

If the state of the roof of a convertible should be saved. If set to false it will always be closed.

### landingGearUp

If the landing gear state should be saved. If set to false it will always be deployed.

### vtolMode

If the vtol mode should be saved (e.g. on the `hydra`).

### stubWings

If the deployable stub wings state should be saved (e.g. on the `akula`).

### boatAnchor

If the anchor state of boats should be saved.

***

## saveBrokenLights

Allows saving headlights, taillights and other additional lights on vehicles. Uses deformation 
functions to break the lights and can thus not net 100% accurate results.

***

## routingBucket

This setting changes the default routing bucket where the script is operating in. Change this only 
if your "main" bucket for player sessions is different from default.

***

## multiBucketSupport

Enable this setting to enable the script to work in _all_ buckets. While this option works 
perfectly fine, most servers should not use this unless all your used buckets have hardcoded ids. 
If a vehicle is saved in bucket 17 it will also respawn in bucket 17 on a server restart.

***

## poolSizeWarningThreshold

This value relates to the `CNetObjVehicle` pool size. A warning will be shown if vehicles spawn for 
a client and this client has more than `max CNetObjVehicle pool size` minus `this value`.

The `CNetObjVehicle` pool size is hardcoded to a maximum of 255 networked vehicles. This value 
cannot be exceeded for a client. Attempting to spawn more vehicles in this client's area causes the 
vehicles to not be synced to this client or other behavior with desynced vehicles.

***

## Map bounds

This setting defines the area for AdvancedParking's internal optimisation layer. Imagine a giant 
rectangle across the whole map.

This only needs to be adjusted if you are using any additional maps that are outside the main 
island or Cayo Perico island.

Warnings will appear when vehicles are detected outside of this area.

- `mapBottomLeft` denotes the X and Y coordinates of the southwest corner of the map
- `mapTopRight` denotes the X and Y coordinates of the northeast corner of the map

***

## forceUnfreezeVehicles

Workaround for a problem where vehicles can sometimes be frozen for whatever reason. Needs to be 
used in conjunction with the file `fixFreezeEntity.lua`.

Add `shared_script "@AdvancedParking/patches/fixFreezeEntity.lua"` to any scripts that actively 
need to freeze vehicles (e.g. some mechanic scripts).

***

## fuelResource

Set the name of your fuel resource here. This works with any fuel resource that provides the 
`GetFuel` and `SetFuel` exports. You can leave it empty to automatically detect ox_fuel or if that 
is not found it will use the default native functions.

***

## saveOnlyOwnedVehicles

Save only player owned vehicles. Works with ESX, QB, QBox, ox.

***

## preventDuplicateVehicles

If set to true, it will delete outside vehicles with the same plate on an update. This is meant as 
a compatibility feature with resources that might not properly detect vehicles from AP as outside.

You should edit your scripts to prevent these in the first place if possible. We might be able to 
help with these issues if you join [our support Discord](https://discord.kiminaze.de).

***

## classesBlacklist

Comma separated list of vehicle classes that should not be saved. A list of all IDs can be found 
here: https://docs.fivem.net/natives/?_0x29439776AAA00A62

***

## vehiclesBlacklist

Comma separated list of vehicle models that should not be saved. Use the model names in backticks 
instead of quotes like this: `blista`.

***

## platesBlacklist

Comma separated list of plates that should not be saved. The entries are not case sensitive and you 
can use partial strings.

***

## ignoreStateBags

Comma separated list of state bags that should not be saved at all. You can include partial strings.

***

## preventStateBagAutoUpdate

Comma separated list of state bags that should not be updated automatically and directly to the 
database. You can include partial strings.

This is particularly useful if some script updates state bags way too often and causes excessive 
database queries. (e.g. some fuel resource might be doing this)

***

## Commands

All commands use ace permissions and are admin only be default.

### dvCommand

Delete a vehicle using either its plate or AP's internal identifier.

### bringCommand

Bring a vehicle to yourself using either its plate or AP's internal identifier.

### deleteAndStoreCommand

Deletes all saved vehicles and stores vehicles that can be stored in the garage.

### deleteSavedVehiclesCommand

Deletes all saved vehicles from AP's internal data. It does not delete vehicles from the world.

### cleanupCommand

Trigger a manual cleanup. Valid arguments are `owned`, `saved` and `all`. Without an argument all 
three cleanups are triggered. 
