---
description: Easy to use callback system!
---

# 📞 kimi\_callbacks

## Links

* [Latest release version](https://github.com/Kiminaze/kimi\_callbacks/releases/latest)
* [Forum topic](https://forum.cfx.re/t/release-callbacks-using-exports-and-with-added-timeouts/3035585)

## Description

"kimi\_callbacks" is a Lua script for FiveM that allows you to create custom server and client callbacks in an easy manner. This script does nothing by itself and needs to be used via exports from other resources.

I decided to create this script as a base for my other scripts and I felt like the others out there didn't really exactly suit my needs.

## Features

* Clients can request data from the server.
* Server can request data from a client.
* Includes configurable timeouts for requests that take too long.
* Any amount of values can be returned / send.
* Uses exports for all functions.

## Performance

* Idle for both client and server: 0.00ms
* 100 parallel running server callbacks (for the splitsecond they are active at the same time and chances are pretty much 0 to get even 5 at the same time):
  * client side: \~0.30ms
  * server side: \~0.00-0.01ms
