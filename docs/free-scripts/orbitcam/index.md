
# 🎦 OrbitCam

<div class="grid cards" markdown>
- <center><span style="font-size: 32px;">[:simple-github:{ .github } **GitHub**](https://github.com/Kiminaze/OrbitCam)</span></center>
- <center><span style="font-size: 32px;">[:custom-icons8-fivem: Forum topic](https://forum.cfx.re/t/free-orbitcam-lets-you-orbit-around-a-given-point-or-entity/4971536)</span></center>
</div>

## Description

The OrbitCam is a script that allows you to have a separate camera that can orbit a given point or 
entity. This is very useful for certain occasions where the default camera is useless or where you 
need some more control over the camera angle.

When the player is dead, you can no longer move the camera in the base game. This allows you to 
change that. You could also start a camera when a player is sitting on some benches where the 
default camera would usually glitch into the player.

Since v1.3.0 it also includes an "automatic" orbit mode where it automatically orbits around the 
given point/entity/bone.

<div class="youtube-placeholder" data-videotitle="OrbitCam Showcase" data-videoid="IrrPiBaRS18"></div>

## Features

* Orbit the camera around a given point or entity.
* Can follow entities with an offset (including tracking individual bones!).
* Zooming in and out.
* Configurable min and max radius and zooming steps in between.
* Configurable transition speed between gameplay and orbit cam.
* Works on mouse + keyboard and controller!
* Comes with several exports that can be used from other scripts.
* When using the script "baseevents": Automatically starts a camera when the player dies.
* Set automatic orbit speed for some nice showcase shots.

## Performance

* Client side:
  * Idle: 0.00ms
  * Active camera: ~0.07ms
* Server side: 0.00ms
