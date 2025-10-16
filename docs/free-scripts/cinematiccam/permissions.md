
# Permissions

To activate the permission system set `Config.usePermissions = true` in the cinematiccam 
`config.lua`.

<br>

## How to add permission? { .purple-title }

In the file `server/permissions.lua` is defined what kind of permission is whitelisted.
The default setting is for `ace permissions` from FiveM but you can add any permission system in 
the function there.

`Ace` permissions are set by FiveM and can be added in your `server.cfg`.
You can add user or permission groups.

<br>

### Add a user { .purple-title }
You can add user by identifier in your `server.cfg`.

This is an example for FiveM:<br>
`add_ace identifier.fivem:ADDFIVEMIDHERE "CinematicCamPermission" allow`

This is an example for Rockstar license:<br>
`add_ace identifier.license:ADDROCKSTARLICENSEHERE "CinematicCamPermission" allow`

This is an example for Rockstar license2:<br>
`add_ace identifier.license2:ADDROCKSTARLICENSE2HERE "CinematicCamPermission" allow`

This is an example for Discord:<br>
`add_ace identifier.discord:ADDDISCORDIDHERE "CinematicCamPermission" allow`

This is an example for steam id:<br>
`add_ace identifier.steam:ADDSTEAMIDHERE "CinematicCamPermission" allow`

This is an example for Xbox Live:<br>
`add_ace identifier.xbl:ADDXBOXLIVEIDHERE "CinematicCamPermission" allow`

This is an example for Windows Live:<br>
`add_ace identifier.live:ADDWINDOWSLIVEIDSEHERE "CinematicCamPermission" allow`

Just replace the capital text with the identifier of the player.<br>
Restart your server after adding permissions!

<br>

### Add an ace group { .purple-title }

If you have an ace group, you can add a group permission into your `server.cfg` like this:<br>
`add_ace group.admin "CinematicCamPermission" allow`

The name of the ace group is here "admin" just replace it with your ace group name.<br>
Restart your server after adding permissions!