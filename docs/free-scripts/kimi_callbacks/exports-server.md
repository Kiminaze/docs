
# Exports (server)

## Register

Registers a callback on server side. A client can then call this callback to request data from the 
server.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to register (must be unique!).<br>
**callbackHandler** - `function` - The function to be executed that will return your values.

<font style="color:green;">**Callback function signature:**</font><br>
**playerId** - `int` - The server id of the client triggering this callback.<br>
**...** - `?` - The values send from client side.

```lua
exports["kimi_callbacks"]:Register("my_callback", function(playerId, ...)
	-- your code

	return <val1>, <val2>, ...
end)
```

***

## Remove

Removes a callback from server side.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback you want to remove.

```lua
exports["kimi_callbacks"]:Remove("my_callback")
```

***

## Trigger

Triggers a blocking client callback on the specified client with a default timeout of 5000ms.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**playerId** - `number` - The server side player id (source) of the player.<br>
**...** - `?` - The values you need to send to the client callback.

<font style="color:green;">**Returns:**</font><br>
`...` - Any values returned from the client callback.

```lua
local val1, val2, ... = exports["kimi_callbacks"]:Trigger("my_callback", playerId, ...)
```

***

## TriggerWithTimeout

Triggers a blocking client callback on the specified client with a specified timeout.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**playerId** - `number` - The server side player id (source) of the player.<br>
**timeout** - `number` - The timeout in milliseconds.<br>
**...** - `?` - The values you need to send to the client for the callback to work.

<font style="color:green;">**Returns:**</font><br>
`...` - Any values returned from the client callback.

```lua
local val1, val2, ... = exports["kimi_callbacks"]:TriggerWithTimeout("my_callback", playerId, 3000, ...)
```

***

## TriggerAsync

Triggers a client callback on the specified client with a default timeout of 5000ms and executes a 
callback function.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**playerId** - `number` - The server side player id (source) of the player.<br>
**handler** - `function` - The function to execute after the callback succeeded.<br>
**...** - `?` - The values you need to send to the client for the callback to work.

<font style="color:green;">**Handler signature:**</font><br>
**...** - `?` - The returned values from the client.

```lua
exports["kimi_callbacks"]:TriggerAsync("my_callback", playerId, function(val1, val2, ...)
	-- your code
end, ...)
```

***

## TriggerWithTimeoutAsync

Triggers a client callback on the specified client with a specified timeout and executes a callback 
function.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**playerId** - `number` - The server side player id (source) of the player.<br>
**timeout** - `number` - The timeout in milliseconds.<br>
**handler** - `function` - The function to execute after the callback succeeded.<br>
**...** - `?` - The values you need to send to the client for the callback to work.

<font style="color:green;">**Handler signature:**</font><br>
**...** - `?` - The returned values from the client.

```lua
exports["kimi_callbacks"]:TriggerWithTimeoutAsync("my_callback", playerId, 3000, function(val1, val2, ...)
	-- your code
end, ...)
```
