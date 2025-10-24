
# 📞 kimi_callbacks

<div class="grid cards" markdown>
- <center><span style="font-size: 32px;">[:simple-github:{ .github } **GitHub**](https://github.com/Kiminaze/kimi_callbacks)</span></center>
- <center><span style="font-size: 32px;">[:custom-icons8-fivem: Forum topic](https://forum.cfx.re/t/release-callbacks-using-exports-and-with-added-timeouts/3035585)</span></center>
</div>

## Description

"kimi_callbacks" is a Lua script for FiveM that allows you to create custom server and client 
callbacks in an easy manner. This script does nothing by itself and needs to be used via exports 
from other resources.

## Features

* Clients can request data from the server.
* Server can request data from a client.
* Includes configurable timeouts for requests that take too long.
* Any amount of values can be returned / send.
* Uses exports for all functions.

## Performance

* Idle for both client and server: 0.00ms
* 100 parallel running server callbacks (for the splitsecond they are active at the same time and 
  chances are pretty much 0 to get even 5 at the same time):
  * client side: ~0.30ms
  * server side: ~0.00-0.01ms
