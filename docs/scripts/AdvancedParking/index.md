---
description: Persistent and dynamic vehicles even across server restarts!
---

# 🚙 AdvancedParking

## Links

* :shopping\_cart: [**Buy on Tebex**](https://kiminazes-script-gems.tebex.io/package/4287488)
* [Forum topic](https://forum.cfx.re/t/advancedparking-v3-11-0-persistent-vehicles-esx-qb-standalone/2099582)

## Description

It allows you to dynamically save any vehicle a player has interacted with and will then respawn the vehicles if they despawned for whatever reason.

All vehicle modifications and statuses are saved and will be reapplied upon respawning.

Vehicles that have been saved are completely dynamic. They can still be moved around and damaged and they'll have their values updated accordingly without a player having to enter the vehicle again.

<div class="youtube-placeholder" data-videotitle="AdvancedParking Showcase" data-videoid="_escgRkeOJc"></div>

## Features

* **All vehicles** a player has entered will be **saved**.
  * Configurable vehicle **class**, **model** and **plate blacklist**.
* Vehicles will **respawn automatically** when a player gets close and the vehicle isn't there yet.
* Vehicles will **respawn after a server restart**.
* Vehicles that have been saved are **completely dynamic**. They can be moved and take damage.
* Vehicle spawning happens on server side.
* Attached **trailers** will be saved automatically.
* Option to **save only player owned vehicles** (requires **ESX** or **QB**).
* **Cleanup function** takes care of vehicles that haven't been updated in a while.
  * Configurable time threshold.
  * Option to send cleaned up vehicles to the player garage (requires **ESX** or **QB**).
* Non-networked (or client side only) vehicles will be ignored.
* Can be restarted any time.
* Several [**Exports**](https://docs.kiminaze.de/scripts/advancedparking/exports-server) and [**Events**](https://docs.kiminaze.de/scripts/advancedparking/server-events) to extend functionality in your own scripts.

## Saved Values

While this script aims to save all variables of a vehicle, some of them can not yet be updated on server side and will only be updated when entering/leaving the vehicle on client side. The dynamic server side variables are marked with an **(S)**.

* Position and rotation **(S)**
* Status:
  * Entity, body, engine **(S)** and petrol tank **(S)** health
  * Dirt Level
  * Fuel Level (includes compatibility with "LegacyFuel")
  * Door lock status **(S)**
  * Burst/flat tires
  * Missing doors
  * Broken windows
* Tuning:
  * Number plate text
  * Modifications from 0-49
    * This includes all visual and performance mods.
  * Colors
    * Primary and secondary
    * Custom primary and secondary (RGB)
    * Pearlescent
    * Interior
    * Dashboard
    * Tiresmoke
    * Window tint
  * Lights
    * Xenon color
    * Neonlights color
    * Enabled neons
  * Extras
  * Wheels
    * Type
    * Custom
    * Bulletproof
    * Color
    * Drift Tires
  * Livery (from mods, extra livery and roof livery)
* Entity state bags **(S)**

## Performance

* Client side:
  * Idle: 0.00ms
  * Inside a vehicle or while spawning vehicles: Up to 0.01ms
* Server side:
  * Idle: 0.00ms
  * While updating/spawning: up to 0.05ms on average (updates happen every 5 seconds)
  * Server side performance is highly dependent on the amount of vehicles and players present and several other factors. Most of the time, resource usage will actually be quite low.