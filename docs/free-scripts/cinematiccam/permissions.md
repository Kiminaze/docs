
# Permissions

To activate the permission system set `Config.usePermissions = true` in the cinematiccam 
`config.lua`.

***

## How to add permission?

The whitelist system can be found in `server/permissions.lua`. By default it uses the "ace 
permission" system from Cfx but you can add any permission system in that event.

Ace permissions are set by FiveM and can be added in your `server.cfg`. You can add individual 
users or groups.

***

### Add a user 

You can add a user by their identifier in your `server.cfg`.

* FiveM:<br>
    `add_ace identifier.fivem:ADDFIVEMIDHERE "CinematicCamPermission" allow`
* Rockstar license:<br>
    `add_ace identifier.license:ADDROCKSTARLICENSEHERE "CinematicCamPermission" allow`
* Rockstar license2:<br>
    `add_ace identifier.license2:ADDROCKSTARLICENSE2HERE "CinematicCamPermission" allow`
* Discord:<br>
    `add_ace identifier.discord:ADDDISCORDIDHERE "CinematicCamPermission" allow`
* Steam id:<br>
    `add_ace identifier.steam:ADDSTEAMIDHERE "CinematicCamPermission" allow`
* Xbox Live:<br>
    `add_ace identifier.xbl:ADDXBOXLIVEIDHERE "CinematicCamPermission" allow`
* Windows Live:<br>
    `add_ace identifier.live:ADDWINDOWSLIVEIDSEHERE "CinematicCamPermission" allow`

Just replace the capital text with the identifier of the player.<br>
Restart your server after adding permissions!

***

### Add an ace group

If you have an ace group, you can add a group permission into your `server.cfg` like this:<br>
`add_ace group.admin "CinematicCamPermission" allow`

The name of the ace group in the example is "admin". Just replace it with your ace group name.<br>
Restart your server after adding permissions!
