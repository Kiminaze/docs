
# Configuration

## Cleanup settings

The cleanup is a function for deleting vehicles from the world and the AP database, depending on 
your settings. The cleanup will be performed after a server or script restart if you set 
`onScriptRestart = true` and/or `onServerStart = true`. A cleanup will also be performed when you 
add times = {} in the config.

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
* Server restarts at midnight and cleanup is activated on server start.
* Vehicle A was last updated at 11 p.m.
* Vehicle B was last updated at 2 p.m.

**Result:** Vehicle A and B will not be removed and will remain saved.
</div>
<div class="tab-content" markdown="1">
* Server restarts at midnight and cleanup is activated on server start.
* Vehicle A was last updated at 11 p.m.
* Vehicle B was last updated at 2 p.m.

**Result:** Both vehicles will be removed.
</div>
<div class="tab-content" markdown="1">
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
* Server restarts and cleanup is activated at server start.
* Vehicle A has 900 engine health and is not saved.
* Vehicle B has 960 engine health and is saved.
* Vehicle C has 450 engine health and is not saved.
* Vehicle D has 560 engine health and is saved.

**Result:** Vehicle A will stay.  Vehicle B will stay.  Vehicle C will stay.  Vehicle D will be removed.
</div>
<div class="tab-content" markdown="1">
* Server restarts and cleanup is activated at server start.
* Vehicle A has 900 engine health and is not saved.
* Vehicle B has 960 engine health and is saved.
* Vehicle C has 450 engine health and is not saved.
* Vehicle D has 560 engine health and is saved.

**Result:** Vehicle A will stay.  Vehicle B will stay.  Vehicle C will be removed.  Vehicle D will be removed.
</div>
<div class="tab-content" markdown="1">
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
* Server restarts and cleanup is activated at server start.
* Vehicle A is 200 meters away from a player and is not saved.
* Vehicle B is 300 meters away from a player and is saved.
* Vehicle C is 90 meters away from a player and is not saved.
* Vehicle D is 80 meters away from a player and is saved.

**Result:** Vehicle A will stay.  Vehicle B will be removed.  Vehicle C will stay.  Vehicle D will stay.
</div>
<div class="tab-content" markdown="1">
* Server restarts and cleanup is activated at server start.
* Vehicle A is 200 meters away from a player and is not saved.
* Vehicle B is 300 meters away from a player and is saved.
* Vehicle C is 90 meters away from a player and is not saved.
* Vehicle D is 80 meters away from a player and is saved.

**Result:** Vehicle A will be removed.  Vehicle B will be removed.  Vehicle C will stay.  Vehicle D will stay.
</div>
<div class="tab-content" markdown="1">
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
