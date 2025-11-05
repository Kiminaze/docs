
# Commands

## autoorbit

Starts/stops an auto orbit camera on the player. Only available if the `autoOrbitCam` config option 
is set to `true`.

<font style="color:red;">**Parameters:**</font><br>
**boneName** - `string` - Name of the bone to focus on ([bone names](https://docs.fivem.net/natives/?_0x3F428D08BE5AAE31)). 
Defaults to player root.<br>
**x?** - `float` - X position for the offset. Defaults to `0`.<br>
**y?** - `float` - Y position for the offset. Defaults to `0`.<br>
**z?** - `float` - Z position for the offset. Defaults to `0`.<br>
**orbitSpeed?** - `float` - Orbit speed. Defaults to `0`.<br>
**disableControls?** - `integer` - Set to `1` to disable all player controls.

```
Track just the player:
/autoorbit

Track the player's right hand:
/autoorbit IK_R_Hand

Track the player's right hand with an offset of 0,0,1, orbit speed of 2.0 and disable player 
    controls:
/autoorbit IK_R_Hand 0 0 1 2.0 1
```
