---
description: >-
  If you want to define your own transport vehicles (e.g. modded vehicles), you
  can use a series of commands to set it up ingame.
---

# Creating a new transport

{% embed url="https://www.youtube.com/watch?v=oCxglaaeG-Q" %}
How to showcase video
{% endembed %}

1. Make sure there is enough clear space around you.
2. Get the vehicle you want to define as a transport. You have to sit inside or be close to it.
3. Now type in the command `/transport <NAME>` where you replace `<NAME>` with the name of the vehicle (e.g. `/transport flatbed`). This is just so you can identify it later. It could be named anything.
4. Now type the command `/min`. This allows for adjusting the minimum restraints of the loading area. You can use WASD and 8 and 5 on the numpad to move it in all 6 directions relative to the vehicle. You can hold Shift to make moving the points faster.
5. Now type the command `/max`. This works the same as `/min` and is the maximum restraint.
6. If your transport has a ramp in the form of a door (e.g. the Benson), you can use the command `/door DOOR_INDEX` to create an interaction area to open/close this door. Moving works the same as `/min` and `/max`.
7. If your transport needs a ramp model defined, type the command `/rampmodel <MODELNAME>` where you replace `<MODELNAME>` with the name of the ramp model (e.g. `lts_prop_lts_ramp_02` for most of the predefined vehicles). Moving works again the same as `/min` and `/max`.
8. Once you are happy with everything, type the command `/save`.
9. Now you only need to restart the script once by typing the command `ensure VehicleTransport`.
10. If there are no errors: Congrats! You now have a new transport vehicle!
