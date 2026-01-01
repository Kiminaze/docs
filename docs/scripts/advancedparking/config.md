
# Configuration

## Cleanup settings

The cleanup is a function for deleting vehicles from the world and the AP database ( `vehicle_parking` ), depending on 
your settings. The cleanup will be performed after a server or script restart if you set 
`onScriptRestart = true` and/or `onServerStart = true`. A cleanup will also be performed when you 
add `times = {}` in the config.

It will not remove all data from the database and not all vehicles from the server. Only vehicles 
that match the cleanup config conditions will be removed.

***

### ThresholdTime

The thresholdTime is just the holding time for a vehicle. It doesn't matter how often or when you 
perform a cleanup, it will not affect whether a cleanup occurs.

As long as thresholdTime is not nil, it will be checked during a cleanup. Every vehicle that is 
saved will be checked against the thresholdTime. If a vehicle has been standing in the world 
without an update (e.g. enter/exit, damage taken etc) for a timeperiod equal or higher than 
thresholdTime, it will be removed from the world.

<div class="content-box" markdown="1">
<div class="tabs">
<div class="tab">thresholdTime = nil</div>
<div class="tab">thresholdTime = 0</div>
<div class="tab">thresholdTime = 6</div>
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

### EngineThreshold

The engineThreshold is simply the minimum health required for a vehicle.

As long as engineThreshold is not nil, it will be checked during a cleanup. Every saved vehicle 
will be checked for its engine health. If you set allVehicles = true, then _all_ vehicles will be 
checked. All vehicles that have engine health equal to or below the engineThreshold value will be 
removed.

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

**Result:** Vehicle A will stay.  Vehicle B will stay.  Vehicle C will stay.  Vehicle D will be removed.
</div>
<div class="tab-content" markdown="1">
**All vehicle will be deleted due to damage.**
* Server restarts and cleanup is activated at server start.
* Vehicle A has 900 engine health and is not saved.
* Vehicle B has 960 engine health and is saved.
* Vehicle C has 450 engine health and is not saved.
* Vehicle D has 560 engine health and is saved.

**Result:** Vehicle A will stay.  Vehicle B will stay.  Vehicle C will be removed.  Vehicle D will be removed.
</div>
<div class="tab-content" markdown="1">
**No vehicle will be deleted due to damage.**
* Server restarts and cleanup is activated at server start.
* Vehicle A has 900 engine health and is not saved.
* Vehicle B has 960 engine health and is saved.
* Vehicle C has 450 engine health and is not saved.
* Vehicle D has 560 engine health and is saved.

**Result:** Vehicle A will stay.  Vehicle B will stay.  Vehicle C will stay.  Vehicle D will stay.
</div>
</div>

***

### DistanceThreshold

The distanceThreshold is the minimum distance between player and vehicle.

As long as distanceThreshold is not nil, it will be checked during a cleanup. Every saved vehicle 
will be checked for its distance to the closest player. If you set allVehicles = true, _all_ 
vehicles will be checked. Otherwise, only saved vehicles will be checked. All vehicles further away 
from any player than the distanceThreshold will be removed.

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

**Result:** Vehicle A will stay.  Vehicle B will be removed.  Vehicle C will stay.  Vehicle D will stay.
</div>
<div class="tab-content" markdown="1">
**All vehicle will be deleted due to distance from player.**
* Server restarts and cleanup is activated at server start.
* Vehicle A is 200 meters away from a player and is not saved.
* Vehicle B is 300 meters away from a player and is saved.
* Vehicle C is 90 meters away from a player and is not saved.
* Vehicle D is 80 meters away from a player and is saved.

**Result:** Vehicle A will be removed.  Vehicle B will be removed.  Vehicle C will stay.  Vehicle D will stay.
</div>
<div class="tab-content" markdown="1">
**No vehicle will be deleted due to distance from player.**
* Server restarts and cleanup is activated at server start.
* Vehicle A is 200 meters away from a player and is not saved.
* Vehicle B is 300 meters away from a player and is saved.
* Vehicle C is 90 meters away from a player and is not saved.
* Vehicle D is 80 meters away from a player and is saved.

**Result:** Vehicle A will stay.  Vehicle B will stay.  Vehicle C will stay.  Vehicle D will stay.
</div>
</div>

***

### SubmergedVehicles

The submergedVehicles setting determines whether vehicles submerged underwater will be removed when 
AP is trying to respawn them. It will not remove the vehicle on a cleanup.

* If submergedVehicles = false, no submerged vehicles will be removed.
* If submergedVehicles = true and allVehicles = false, only saved vehicles will be removed if they are submerged.
* If submergedVehicles = true and allVehicles = true, all submerged vehicles will be removed.

***

### Zones

All vehicle in this zones will always be removed on a cleanup, without any other conditions.

* { position = vector3(0, 0, 0), radius = 10.0 } -> This will remove vehicle around the map zenter in a 10 meter radius.

***

### IgnoredZones

All vehicle in this sone will always be ignored by the cleanup, they will not be checked for any other condition.

* { position = vector3(0, 0, 0), radius = 10.0 } -> This will remove vehicle around the map zenter in a 10 meter radius.

***

### IgnoredPlates

Plates listed will be ignored and not removed. They can include partial strings and are not case sensitive.

* "XYZ 404 ", "404",

If you have this plates ignored, it will ignore a vehicle with the plate: "XYZ 404 " or with a plate like "abc 404 ".
The first plate is the exact same string as the first entry in the ignore list. The second plate contains a partial string 
that is an entry in your ignore list.

Plates that would not be ignored as an example: "XYZ 403 " or "abc 40 4".
No plate is matching with the first entry and no plate contains partials from the second entry.

***

### IgnoredModels

Vehicle with ignored models will be ignored and not removed.
They need to be written in \`blista\` and not like "blista"! This symboles are the `grave accent` or also called `backtick`.

***

### AllVehicle

If this is set to `true`, all vehicle ( saved and not saved by AP ) will be removed on a cleanup, accordingly to the cleanup settings.
If this is set to `false`, only by AP saved vehicle will be removed on a cleanup, accordingly to the cleanup settings.

***

### StoreVehicles

Send (owned) vehicles to e.g. garage or impound on cleanup.
Some garages will need some chnages in sv_integrations.lua for implementation. Take a look into our FAQ.

***

### OnScriptStart

If this is set to `true` an automated cleanup will be done at any start of AdvancedParking.
If this is set to `false` it will not start an automated cleanup on a start of AdvancedParking.

***

### Times

You can set times were a cleanup should be done automatic.
This uses system time of the server. You can set it daily or weekly.

* { hour = 3, minute = 0 }, -> Every day at 3 am.
* { day = 3, hour = 16, minute = 0 }, -> Every wednesday at 4 pm.

***

### NotificationTimes

When players should be notified before a cleanup (in minutes) is done.

***

### TimeLeftNotification

Notification text to show players before a cleanup (use %s as placeholder for time left in minutes).
If you want to use a custom notification, take look at `cl_integrations.lua`.

***

### DeleteNotification

Notification text to show players when the cleanup is done.
If you want to use a custom notification, take look at `cl_integrations.lua`.

***



## Map bounds

<div class="infobox warning" markdown="1">
Experimental feature!
</div>

This setting defines the area for AdvancedParking's internal optimisation layer. Imagine a giant 
rectangle across the whole map.

This only needs to be adjusted if you are using any additional maps that are outside the main 
island or Cayo Perico.

Warnings will appear when vehicles are detected outside of this area.

- `mapBottomLeft` denotes the X and Y coordinates of the southwest corner of the map
- `mapTopRight` denotes the X and Y coordinates of the northeast corner of the map


