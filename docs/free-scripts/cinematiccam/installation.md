
# Installation

## Requirements

* [NativeUILua](https://github.com/FrazzIe/NativeUILua/archive/refs/heads/master.zip) in the linked 
  version, not the latest release.

***

## Instructions for NativeUI

1. Download [NativeUILua](https://github.com/FrazzIe/NativeUILua/archive/refs/heads/master.zip).
2. Extract the zip file named "NativeUILua-master.zip".
3. Now you have a folder named "NativeUILua-master", look inside that folder and copy the folder 
   named "NativeUI".
4. Paste the "NativeUI" folder into your resources folder on your cfx server.
5. Start the resource in your server.cfg:
    ```
    ensure NativeUI
    ```

***

## Instructions for CinematicCam

1. Download [cinematiccam.zip](https://github.com/Kiminaze/cinematiccam/releases/latest/download/cinematiccam.zip) 
   and extract it into your server's resources folder.
2. Start the resource in your server.cfg:
    ```
    ensure cinematiccam
    ```

<div class="infobox info" markdown="1">
Make sure that NativeUI is started before cinematiccam!
</div>

***

## Known issue

If you get the following error:<br>
`SCRIPT ERROR: @cinematiccam/client/client.lua:180: attempt to call a nil value (method 'Remove')`

Please make sure you downloaded the correct [NativeUILua](https://github.com/FrazzIe/NativeUILua/archive/refs/heads/master.zip) 
from this link. The "latest release" is an older version and hasn't been updated by the developer 
with the latest functions.
