
# Installation

## Requirements

* OneSync
* ESX (any version)
* [kimi_callbacks](https://github.com/Kiminaze/kimi_callbacks/releases/latest)
* [NativeUILua](https://github.com/FrazzIe/NativeUILua)

## Instructions

1. Download the script from [Portal](https://portal.cfx.re/assets/granted-assets) and extract it 
   into your resources folder.
2. Download [kimi_callbacks.zip](https://github.com/Kiminaze/kimi_callbacks/releases/latest/download/kimi_callbacks.zip) 
   and extract it into your resources folder.
3. Download [NativeUILua](https://github.com/FrazzIe/NativeUILua/archive/refs/heads/master.zip) and 
   extract it into your resources folder.
4. Start the resource in your server.cfg:
    ```
    ensure VehicleRegistration
    ```

## Compatibility

* This script relies on the "owned_vehicles" and "users" table from the default ESX database.
* Should be compatible with most other scripts.
* Fully compatible with my other scripts:
  * [AdvancedParking](https://forum.cfx.re/t/release-advancedparking-prevents-despawns-and-now-saves-bodywork-deformation/2099582)
  * [VehicleKeyChain](https://forum.cfx.re/t/release-vehicle-key-chain/3319563)
  * [VehicleInteraction](https://forum.cfx.re/t/release-advanced-vehicle-interaction/2719099)
