# Configurations

## Cleanup settings { .purple-title }

The cleanup is a function for deleting vehicles from the world and the AP database, depending on your settings.
The cleanup will be performed after a server or script restart if you set onScriptRestart = true and/or onServerStart = true.
A cleanup will also be performed when you add times = {} in the config.

It will not remove all data from the database and not all vehicles from the server.
Only vehicles that match the cleanup config conditions will be removed.

---

### ThresholdTime { .purple-title }

The thresholdTime is just the holding time for a vehicle. It doesn't matter how often or when you perform a cleanup, it will not affect whether a cleanup occurs.

As long as the thresholdTime is not nil, it will be checked during a cleanup.
Every vehicle that is saved in AP will be checked against the thresholdTime.
If a vehicle has been standing in the world without an update (entering or exiting the vehicle, taking damage, or being moved) for the time set as thresholdTime or longer, it will be cleaned up/removed.

<div class="content-box">
	<h2>Example</h2>
	<div class="tabs">
      <div class="tab" data-tab="tab1">thresholdTime = nil</div>
      <div class="tab" data-tab="tab2">thresholdTime = 0</div>
      <div class="tab" data-tab="tab3">thresholdTime = 6</div>
    </div>

    <div class="tab-content" id="tab1">
      <p>Server restarts at 00:00 o'clock, and cleanup is activated at server start.<br>
        Vehicle A was last updated at 23:00 o'clock.<br>
        Vehicle B was last updated at 14:00 o'clock.<br>
        <br>
        <b>Solution</b>: Vehicle A and B will not be removed and will remain in the AP database.</p>
    </div>
    <div class="tab-content" id="tab2">
      <p>Server restarts at 00:00 o'clock, and cleanup is activated at server start.<br>
        Vehicle A was last updated at 23:00 o'clock.<br>
        Vehicle B was last updated at 14:00 o'clock.<br>
        <br>
        <b>Solution</b>: Both vehicles will be removed.</p>
    </div>
    <div class="tab-content" id="tab3">
      <p>Server restarts at 00:00 o'clock, and cleanup is activated at server start.<br>
        Vehicle A was last updated at 23:00 o'clock.<br>
        Vehicle B was last updated at 14:00 o'clock.<br>
        <br>
        <b>Solution</b>: Vehicle B will be removed, as it has been standing longer than 6 hours (thresholdTime) in the world.
        Vehicle A will stay, as its last update was less than 6 hours ago (thresholdTime).</p>
    </div>
</div>

---

### EngineThreshold { .purple-title }

The engineThreshold is simply the minimum health required for a vehicle. It doesn't matter how often or when you perform a cleanup, it will not affect whether a cleanup occurs.

As long as the engineThreshold is not nil, it will be checked during a cleanup.
Every vehicle will be checked for its engine health. If you set allVehicles = true, then all vehicles will be checked. Otherwise, only saved vehicles will be checked.
All vehicles that have engine health equal to or below the engineThreshold value will be cleaned up/removed.

<div class="content-box">
	<h2>Example</h2>
	<div class="tabs">
      <div class="tab" data-tab="tab4">engineThreshold = 700.0 and allVehicles = false</div>
      <div class="tab" data-tab="tab5">engineThreshold = 700.0 and allVehicles = true</div>
      <div class="tab" data-tab="tab6">engineThreshold = nil and allVehicles = true or false</div>
    </div>

    <div class="tab-content" id="tab4">
      <p>Server restarts and cleanup is activated at server start.<br>
        Vehicle A has 900 engine health and is not saved.<br>
        Vehicle B has 960 engine health and is saved.<br>
        Vehicle C has 450 engine health and is not saved.<br>
        Vehicle D has 560 engine health and is saved.<br>
        <br>
        <b>Solution</b>:  Vehicle A will stay.  Vehicle B will stay.  Vehicle C will stay.  Vehicle D will be removed.</p>
    </div>
    <div class="tab-content" id="tab5">
      <p>Server restarts and cleanup is activated at server start.<br>
        Vehicle A has 900 engine health and is not saved.<br>
        Vehicle B has 960 engine health and is saved.<br>
        Vehicle C has 450 engine health and is not saved.<br>
        Vehicle D has 560 engine health and is saved.<br>
        <br>
        <b>Solution</b>:  Vehicle A will stay.  Vehicle B will stay.  Vehicle C will be removed.  Vehicle D will be removed.</p>
    </div>
    <div class="tab-content" id="tab6">
      <p>Server restarts and cleanup is activated at server start.<br>
        Vehicle A has 900 engine health and is not saved.<br>
        Vehicle B has 960 engine health and is saved.<br>
        Vehicle C has 450 engine health and is not saved.<br>
        Vehicle D has 560 engine health and is saved.<br>
        <br>
        <b>Solution</b>:  Vehicle A will stay.  Vehicle B will stay.  Vehicle C will stay.  Vehicle D will stay.</p>
    </div>
</div>

---

### DistanceThreshold { .purple-title }

The distanceThreshold is the minimum distance between player and vehicle.
It doesn't matter how often or when you perform a cleanup, it will not affect whether a cleanup occurs.

As long as the distanceThreshold is not nil, it will be checked during a cleanup.
Every vehicle will be checked for its distance to a player. If you set allVehicles = true, all vehicles will be checked. Otherwise, only saved vehicles will be checked.
All vehicles that are farther away from any player than the distanceThreshold will be removed.

<div class="content-box">
	<h2>Example</h2>
	<div class="tabs">
      <div class="tab" data-tab="tab7">distanceThreshold = 100 and allVehicles = false</div>
      <div class="tab" data-tab="tab8">distanceThreshold = 100 and allVehicles = true</div>
      <div class="tab" data-tab="tab9">distanceThreshold = nil and allVehicles = true or false</div>
    </div>

    <div class="tab-content" id="tab7">
      <p>Server restarts and cleanup is activated at server start.<br>
        Vehicle A is 200 meters away from a player and is not saved.<br>
        Vehicle B is 300 meters away from a player and is saved.<br>
        Vehicle C is 90 meters away from a player and is not saved.<br>
        Vehicle D is 80 meters away from a player and is saved.<br>
        <br>
        <b>Solution</b>:  Vehicle A will stay.  Vehicle B will be removed.  Vehicle C will stay.  Vehicle D will stay.</p>
    </div>
    <div class="tab-content" id="tab8">
      <p>Server restarts and cleanup is activated at server start.<br>
        Vehicle A is 200 meters away from a player and is not saved.<br>
        Vehicle B is 300 meters away from a player and is saved.<br>
        Vehicle C is 90 meters away from a player and is not saved.<br>
        Vehicle D is 80 meters away from a player and is saved.<br>
        <br>
        <b>Solution</b>:  Vehicle A will be removed.  Vehicle B will be removed.  Vehicle C will stay.  Vehicle D will stay.</p>
    </div>
    <div class="tab-content" id="tab9">
      <p>Server restarts and cleanup is activated at server start.<br>
        Vehicle A is 200 meters away from a player and is not saved.<br>
        Vehicle B is 300 meters away from a player and is saved.<br>
        Vehicle C is 90 meters away from a player and is not saved.<br>
        Vehicle D is 80 meters away from a player and is saved.<br>
        <br>
        <b>Solution</b>:  Vehicle A will stay.  Vehicle B will stay.  Vehicle C will stay.  Vehicle D will stay.</p>
    </div>
</div>

---

### SubmergedVehicles { .purple-title }

The submergedVehicles setting determines whether vehicles submerged underwater will be removed when Ap is trying to respawn them. 
It will not remove the vehicle on a cleanup.
It doesn't matter how often or when you perform a cleanup; it will not affect whether a cleanup occurs.

* If submergedVehicles = false, no submerged vehicles will be removed.
* If submergedVehicles = true and allVehicles = false, only saved vehicles will be removed if they are submerged.
* If submergedVehicles = true and allVehicles = true, all submerged vehicles will be removed.



<script>
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const contentId = tab.getAttribute('data-tab');
        document.getElementById(contentId).classList.add('active');
      });
    });
  </script>