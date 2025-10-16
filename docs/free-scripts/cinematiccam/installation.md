# Installation

## Requirements { .purple-title }

* [NativeUILua](https://github.com/FrazzIe/NativeUILua/archive/refs/heads/master.zip) in the linked version, not the lates release.


## Instructions for NativeUI { .purple-title }

1. Download [NativeUILua](https://github.com/FrazzIe/NativeUILua/archive/refs/heads/master.zip).
2. Extract the zip file named "NativeUILua-master.zip".
3. Now you have a folder named "NativeUILua-master", look inside that folder and copy the folder named "NativeUI".
4. Paste the "NativeUI" folder into your resources folder on your cfx server.
5. Add this line to your "server.cfg": `ensure NativeUI`


## Instructions for CinematicCam { .purple-title }

1. Download [CinematicCam](https://github.com/Kiminaze/cinematiccam/releases/latest/cinematiccam.zip).
2. Extract the zip file named "cinematiccam.zip".
3. Copy the folder named "cinematiccam".
4. Past the "cinematiccam" folder into your resources folder on your cfx server.
5. Add this line to your "server.cfg": `ensure cinematiccam`

!!! info
	Make sure that NativeUI is started before cinematiccam!

---

## Known issue { .purple-title }
If you get the following error:<br>
`SCRIPT ERROR: @cinematiccam/client/client.lua:180: attempt to call a nil value (method 'Remove')`

Please make sure you downloaded the correct [NativeUILua](https://github.com/FrazzIe/NativeUILua/archive/refs/heads/master.zip) from this link.
The "latest release" is an older version and hasn't been updated by the developer with the latest functions.