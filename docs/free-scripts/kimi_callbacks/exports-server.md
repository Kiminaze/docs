# Exports (server)

## Register(**callbackName, callbackHandler**)

Registers a callback on server side. A client can then call this callback to request data from the server.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to register (must be unique!).\
**callbackHandler** - `function` - The function to be executed that will return your values.



***

## Remove(callbackName)

Removes a callback from server side.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback you want to remove.



***

## Trigger(callbackName, playerId, ...)

Triggers a (blocking) client callback on the specified client with a default timeout of 5000ms.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to execute.\
**playerId** - `number` - The server side player id (source) of the player.\
&#xNAN;**...** - `?` - The values you need to send to the client for the callback to work.

<mark style="color:green;">**Returns:**</mark>\
`...` - Any values returned from the client callback.



***

## TriggerWithTimeout(name, playerId, timeout, ...)

Triggers a (blocking) client callback on the specified client with a specified timeout.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to execute.\
**playerId** - `number` - The server side player id (source) of the player.\
**timeout** - `number` - The timeout in milliseconds.\
&#xNAN;**...** - `?` - The values you need to send to the client for the callback to work.

<mark style="color:green;">**Returns:**</mark>\
`...` - Any values returned from the client callback.



***

## TriggerAsync(callbackName, playerId, handler, ...)

Triggers a client callback on the specified client with a default timeout of 5000ms and executes a callback function.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to execute.\
**playerId** - `number` - The server side player id (source) of the player.\
**handler** - `function` - The function to execute after the callback succeeded. It's parameters are the return values from the callback.\
&#xNAN;**...** - `?` - The values you need to send to the client for the callback to work.



***

## TriggerWithTimeoutAsync(name, playerId, timeout, callback, ...)

Triggers a client callback on the specified client with a specified timeout and executes a callback function.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to execute.\
**playerId** - `number` - The server side player id (source) of the player.\
**timeout** - `number` - The timeout in milliseconds.\
**handler** - `function` - The function to execute after the callback succeeded. It's parameters are the return values from the callback.\
&#xNAN;**...** - `?` - The values you need to send to the client for the callback to work.
