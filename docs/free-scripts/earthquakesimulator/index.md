
# 🏔️ EarthquakeSimulator

<div class="grid cards" markdown>
- <center><span style="font-size: 32px;">[:simple-github:{ .github } **GitHub**](https://github.com/Kiminaze/EarthquakeSimulator)</span></center>
- <center><span style="font-size: 32px;">[:custom-icons8-fivem: Forum topic](https://forum.cfx.re/t/earthquake-simulator-create-chaos-and-confusion/5279324)</span></center>
</div>

## Description

This is a small resource that allows you to start a server wide earthquake that affects not only 
players but also peds, vehicles and objects!

<div class="youtube-placeholder" data-videotitle="EarthquakeSimulator Showcase" data-videoid="23IjCfy2c4o"></div>

## Features

* Ragdolls players and other peds.
* Applies force to vehicles and objects on the ground.
* Server side command and export to trigger an Earthquake.
  * Frequency and force can be customized.
* Config allows for editing camera shake and ragdoll effects.
* Uses GlobalState state bag:
  * Synced between players
  * Connecting during earthquake will properly start the earthquake for that player.

## Performance

* Client side:
  * Idle: 0.00ms
  * Active: 0.06-0.12ms
* Server side: 0.00ms
