
# Installation

## Requirements

* OneSync
* [OxMySQL](https://forum.cfx.re/t/standalone-oxmysql-lightweight-mysql-wrapper/4755120)
* [kimi_callbacks](https://github.com/Kiminaze/kimi_callbacks/releases/latest)

## Instructions

1. Download the script from [Portal](https://portal.cfx.re/assets/created-assets) and extract it 
   into your resources folder. (do _**not**_ use the experimental version unless you explicitly 
   want to)
2. Make sure the resource name is `AdvancedParking`.
3. Download and install OxMySQL (can be skipped if you are already using it).
4. Download [kimi\_callbacks.zip](https://github.com/Kiminaze/kimi_callbacks/releases/latest) and 
   extract it into your resources folder.
5. Start the resource in your server.cfg:
    ```
    ensure AdvancedParking
    ```
6. Make sure to implement [the fix below](#deleting-vehicles) if you still need to delete vehicles!

***

### Deleting vehicles

Usually you don´t need to use any of the provided "delete" exports!

This fix should be added to your framework resource (`es_extended`, `qb-core`, etc) first and 
foremost!

* Simply add the following line inside the fxmanifest of the respective resource:
    ```lua
    shared_script "@AdvancedParking/fixDeleteVehicle.lua"
    ```
* Restart your server or refresh the resource list and restart the respective resource after adding 
  the line.

!!! danger ""
    <font style="color:#c9bb77;">:fontawesome-solid-exclamation-triangle:{ .youtube } If any other script does not delete a vehicle properly (it gets 
    deleted but appears again) then repeat this step in the respective script.</font>

!!! info
    There might be some scripts out there where this will _not_ work. If you find yourself in this 
    situation, it might be best to simply ask for help in 
    [our support](https://discord.kiminaze.de).

***

### Installation Videos

<div class="youtube-placeholder" data-videotitle="AdvancedParking Installation English" data-videoid="1IPgzh8Y6P0"></div>

<div class="youtube-placeholder" data-videotitle="AdvancedParking Installation Deutsch" data-videoid="HMNh9aUPn_8"></div>
