# Exports (client)

## Register(callbackName, callbackHandler)

Registers a callback on client side. The server can then call this callback to request data from a client.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to register (must be unique!).\
**callbackHandler** - `function` - The function to be executed that will return your values.



***

## Remove(callbackName)

Removes a callback from client side.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback you want to remove.



***

## Trigger(callbackName, ...)

Triggers a (blocking) server callback with a default timeout of 5000ms.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to execute.\
&#xNAN;**...** - `?` - The values you need to send to the server for the callback to work.

<mark style="color:green;">**Returns:**</mark>\
`...` - Any values returned from the server callback.



***

## TriggerWithTimeout(name, timeout, ...)

Triggers a (blocking) server callback with a specified timeout.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to execute.\
**timeout** - `number` - The timeout in milliseconds.\
&#xNAN;**...** - `?` - The values you need to send to the server for the callback to work.

<mark style="color:green;">**Returns:**</mark>\
`...` - Any values returned from the server callback.



***

## TriggerAsync(callbackName, handler, ...)

Triggers a server callback with a default timeout of 5000ms and executes a callback function.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to execute.\
**handler** - `function` - The function to execute after the callback succeeded. It's parameters are the return values from the callback.\
&#xNAN;**...** - `?` - The values you need to send to the server for the callback to work.



***

## TriggerWithTimeoutAsync(name, timeout, callback, ...)

Triggers a server callback with a specified timeout and executes a callback function.

<mark style="color:red;">**Parameters:**</mark>\
**callbackName** - `string` - The name of the callback to execute.\
**timeout** - `number` - The timeout in milliseconds.\
**handler** - `function` - The function to execute after the callback succeeded. It's parameters are the return values from the callback.\
&#xNAN;**...** - `?` - The values you need to send to the server for the callback to work.
