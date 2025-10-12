# Installation

## Requirements

* OneSync
* ESX (any version)
* [kimi\_callbacks](https://github.com/Kiminaze/kimi\_callbacks/releases/latest)
* [NativeUI](https://github.com/FrazzIe/NativeUILua)

## Instructions

1. Download the script from your keymaster website and extract it into your resources folder.
2. Download [kimi\_callbacks.zip](https://github.com/Kiminaze/kimi\_callbacks/releases/latest) and extract it into your resources folder.
3. Download and install NativeUI.
4.  Start the resource in your server.cfg:

    ```
    ensure VehicleRegistration
    ```

## Compatibility

* This script relies on the "owned\_vehicles" and "users" table from the default ESX database.
* Should be compatible with most other scripts.
* Fully compatible with my other scripts:
  * [AdvancedParking](https://forum.cfx.re/t/release-advancedparking-prevents-despawns-and-now-saves-bodywork-deformation/2099582)
  * [VehicleKeyChain](https://forum.cfx.re/t/release-vehicle-key-chain/3319563)
  * [VehicleInteraction](https://forum.cfx.re/t/release-advanced-vehicle-interaction/2719099)
