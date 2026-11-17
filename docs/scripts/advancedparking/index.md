
---
description: Persistent and dynamic vehicles even across server restarts!
---

# 🚙 AdvancedParking

<div class="grid cards" markdown>
- <center><span style="font-size: 32px;">[:shopping_cart: **Buy on Tebex**](https://kiminazes-script-gems.tebex.io/package/4287488)</span></center>
- <center><span style="font-size: 32px;">[:custom-icons8-fivem: Forum topic](https://forum.cfx.re/t/advancedparking-v3-11-0-persistent-vehicles-esx-qb-standalone/2099582)</span></center>
</div>

## Description

**AdvancedParking** is a framework-independent (can be used with any framework or without) vehicle 
persistence system for FiveM. It saves vehicles in the world and restores them at their last known 
location, including after they despawn or the server restarts.

**Any vehicle can be saved.** Player-owned, unowned, stolen, NPC-spawned, job-related, or spawned 
by another resource. You can configure which vehicles should remain through ownership settings, 
vehicle classes, models, and plate blacklists.

When a saved vehicle is no longer present in the world, AdvancedParking will respawn it on the 
server side when a player gets close enough again. Its saved position, damage, modifications, and 
other supported values are restored automatically.

Saved vehicles remain dynamic. They can be pushed, moved, damaged, and modified, with supported 
changes persisted accordingly.

<div class="youtube-placeholder" data-videotitle="AdvancedParking Showcase" data-videoid="_escgRkeOJc"></div>

## Features

- **All vehicles** a player has entered will be **saved**.
  - Configurable vehicle **class**, **model** and **plate blacklist**.
  - Or **save only player owned vehicles** (requires **ESX**, **QB**, **QBOX**, **OX**).
- Vehicles will **respawn automatically** when players get close and the vehicle isn't there, even 
  after a server restart.
- Vehicles that have been saved are **completely dynamic** and some values can be updated without a 
  player inside.
  - Position and Rotation
  - Damage
  - Door Lock State
- **Attached trailers** will be saved automatically.
- **Attached vehicles** [can be saved](https://docs.kiminaze.de/scripts/advancedparking/installation/#saving-attached-vehicles).
- **Cleanup function** takes care of vehicles:
  - Several configurable thresholds like time, engine health and distance to players.
  - Option to return cleaned-up vehicles to the garage.
- Admin command for deleting all vehicles from the database table.
- **Exports** for integration in other resources:
  - Get vehicle positions across the map
  - Delete vehicles
  - Several state bag related exports
  - Get vehicle data/status
  - Trigger manual update of a vehicle
- **Commands** for deleting and bringing vehicles and starting a manual cleanup.
- Can be restarted any time in case you want to change anything.

## How It Works

When a player enters an eligible networked vehicle, AdvancedParking registers the vehicle in your 
database.

If the vehicle should disappear (e.g. no longer relevant to clients or after a server restart), 
AdvancedParking will recreate it when a player gets in range of 200 meters of the vehicle, ensuring 
a non-intrusive form of spawning.

The vehicle's persistence is not tied to the client that originally entered it. Its saved position 
and state are managed on server side.


## Do I Need a Garage System?

Technically, a garage is **not** a requirement to run AdvancedParking on your server. However, it 
is recommended for servers that need a way to recover vehicles that have become inaccessible.

Because vehicles persist in the world, situations can occur where a vehicle ends up in places where 
it can not be recovered by in-world player interaction (e.g. submerged or glitched through the 
world). The cleanup system together with a garage can ensure that these vehicles will eventually be 
accessible to the player again.

Garages also help with vehicle population. As AdvancedParking is made to be fully dynamic and not 
interfere with player behavior, players can technically collect a bunch of vehicles in one area of 
a map. The current hardcoded pool size in FiveM for networked vehicles present on client side is 
256. If you have more vehicles than this present in range, some of them won't be replicated to 
other players and you will run into syncing issues. AdvancedParking will show a warning in the 
server log when an area is approaching this limit.


## Saved Vehicle Values

While AdvancedParking aims to save all variables of a vehicle, some of them cannot be reliably 
updated  on server side and will only be updated when entering/leaving the vehicle (or when using 
the included `UpdateVehicle` export).

- Position and rotation
- Status:
  - Entity, body, engine and petrol tank health
  - Dirt Level
  - Fuel Level (includes compatibility with "LegacyFuel")
  - Door lock status
  - Burst/flat tires
  - Missing doors
  - Broken windows
  - Broken lights
- Tuning:
  - Number plate text
  - Modifications from 0-49
    - Visual and performance mods
  - Colors
    - Primary and secondary
    - Custom primary and secondary (RGB)
    - Pearlescent
    - Interior
    - Dashboard
    - Tiresmoke
    - Window tint
  - Lights
    - Xenon color
    - Neonlights color
    - Enabled neons
  - Extras
  - Wheels
    - Type
    - Custom
    - Bulletproof
    - Color
    - Drift Tires
  - Livery (from mods, extra livery and roof livery)
- Extra values:
  - Landing gear state
  - Vtol position
  - Boat anchor state
  - Convertible roof state
  - Stub wings state
- Entity state bags


## Performance Benchmarks

All performance benchmarks have been executed several times to get an average result. All tests 
have been performed with 500 vehicles saved.

### Client Side

| Scenario                         | Vehicles | Total Execution Time | Measurement Period | Usage  | Highest Single Tick |
| -------------------------------- | :------: | :------------------: | :----------------: | :----: | :-----------------: |
| Idle outside vehicle             | ~200     | 1.0 ms               | 3 s                | ~0.03% | -                   |
| Idle inside vehicle              | ~200     | 1.6 ms               | 3 s                | ~0.05% | -                   |
| Spawning vehicles next to player | 200      | 60 ms                | 3 s                | ~2.00% | 1.5 ms              |

### Server Side

| Scenario                   | Players           | Vehicles | Total Execution Time | Measurement Period | Usage   | Highest Single Tick |
| -------------------------- | :---------------: | :------: | :------------------: | :----------------: | :-----: | :-----------------: |
| Idle                       | 1                 | 0        | 1.1 ms               | 1 s                | ~0.11%  | -                   |
| Spawning vehicles          | 1                 | 200      | 270 ms               | 1 s                | ~27.00% | 37 ms               |
| Updating existing vehicles | 1                 | 200      | 11.2 ms              | 10 s               | ~0.11%  | -                   |
| Idle                       | 1,000 (simulated) | 0        | 5.2 ms               | 1 s                | ~0.52%  | -                   |
| Spawning vehicles          | 1,000 (simulated) | 200      | 400 ms               | 3.2 s              | ~12.50% | 31 ms               |
| Updating existing vehicles | 1,000 (simulated) | 200      | 50 ms                | 10 s               | ~0.50%  | -                   |

**Note:** "Simulated" players actually means an overridden `GetPlayers()` function that returns the 
same player 1000 times. This causes all subsequent player related functions to be called 1000 times 
as well to provide a metric close to what it would actually be.


## Patch Notes

For a complete history of updates, changes and fixes, head to GitHub for 
[all patch notes](https://github.com/Kiminaze/version_history/blob/main/AdvancedParking.json).
