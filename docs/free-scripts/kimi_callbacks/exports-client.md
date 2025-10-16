
# Exports (client)

## Register(callbackName, callbackHandler)

Registers a callback on client side. The server can then call this callback to request data from a 
client.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to register (must be unique!).<br>
**callbackHandler** - `function` - The function to be executed that will return your values.

***

## Remove(callbackName)

Removes a callback from client side.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback you want to remove.

***

## Trigger(callbackName, ...)

Triggers a (blocking) server callback with a default timeout of 5000ms.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**...** - `?` - The values you need to send to the server for the callback to work.

<font style="color:green;">**Returns:**</font><br>
`...` - Any values returned from the server callback.

***

## TriggerWithTimeout(name, timeout, ...)

Triggers a (blocking) server callback with a specified timeout.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**timeout** - `number` - The timeout in milliseconds.<br>
**...** - `?` - The values you need to send to the server for the callback to work.

<font style="color:green;">**Returns:**</font><br>
`...` - Any values returned from the server callback.

***

## TriggerAsync(callbackName, handler, ...)

Triggers a server callback with a default timeout of 5000ms and executes a callback function.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**handler** - `function` - The function to execute after the callback succeeded. It's parameters 
are the return values from the callback.<br>
**...** - `?` - The values you need to send to the server for the callback to work.

***

## TriggerWithTimeoutAsync(name, timeout, callback, ...)

Triggers a server callback with a specified timeout and executes a callback function.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**timeout** - `number` - The timeout in milliseconds.<br>
**handler** - `function` - The function to execute after the callback succeeded. It's parameters 
are the return values from the callback.<br>
**...** - `?` - The values you need to send to the server for the callback to work.
