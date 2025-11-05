
# 🗺️ VehicleTracker

<div class="grid cards" markdown>
- <center><span style="font-size: 32px;">[:shopping_cart: **Buy on Tebex**](https://kiminazes-script-gems.tebex.io/package/4597307)</span></center>
- <center><span style="font-size: 32px;">[:custom-icons8-fivem: Forum topic](https://forum.cfx.re/t/release-vehicletracker-track-vehicles-across-the-map/4133230)</span></center>
</div>

## Description

This resource provides you with the means to locate and track all your owned vehicles via blips on 
the map. This is a great complimentary resource for any parking scripts as it allows tracking even 
when the vehicles are out of scope of a player.

Fully compatible with [AdvancedParking](https://forum.cfx.re/t/release-advancedparking-prevents-despawns/2099582) 
and can integrate into other scripts as well using the available exports.

<div class="youtube-placeholder" data-videotitle="VehicleTracker Showcase" data-videoid="Yg4H8DYa9r8"></div>

## Features

* Menu for **tracking owned vehicles** (ESX/QB + NativeUI necessary). (configurable command and/or 
  button and/or item)
* **Police can track any vehicle** by plate (ESX/QB + NativeUI necessary).
* Tracking blips are updated every 2.5 seconds or in **realtime** when the vehicle is nearby 
  (configurable).
* Serverside **exports** for tracking vehicles.

## Performance

* Client Side:
  * Idle: 0.00ms
  * Tracking 3 vehicles: 0.01-0.04ms (depends on if they are updated client or serverside)
* Server Side:
  * Idle: 0.00ms
  * Tracking 3 vehicles: 0.01-0.02ms (depends on if they are updated client or serverside)

## Compatibility

If you are not using a parking script and you are not spawning your vehicles on server side, the 
blips will disappear when the player is too far away, as the vehicle might be unloaded by the 
engine itself. This is why it is highly recommended to use e.g. AdvancedParking, as that script 
will always return a position of a saved vehicle!
