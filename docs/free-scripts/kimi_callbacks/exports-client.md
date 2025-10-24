
# Exports (client)

## Register

Registers a callback on client side. The server can then call this callback to request data from a 
client.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to register (must be unique!).<br>
**callbackHandler** - `function` - The function to be executed that will return your values.

<font style="color:green;">**Callback function signature:**</font><br>
**...** - `?` - The values send from server side.

```lua
exports["kimi_callbacks"]:Register("my_callback", function(...)
	-- your code

	return <val1>, <val2>, ...
end)
```

***

## Remove

Removes a callback from client side.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback you want to remove.

```lua
exports["kimi_callbacks"]:Remove("my_callback")
```

***

## Trigger

Triggers a blocking server callback with a default timeout of 5000ms.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**...** - `?` - The values you need to send to the server for the callback to work.

<font style="color:green;">**Returns:**</font><br>
`...` - Any values returned from the server callback.

```lua
local val1, val2, ... = exports["kimi_callbacks"]:Trigger("my_callback", ...)
```

***

## TriggerWithTimeout

Triggers a blocking server callback with a specified timeout.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**timeout** - `number` - The timeout in milliseconds.<br>
**...** - `?` - The values you need to send to the server for the callback to work.

<font style="color:green;">**Returns:**</font><br>
`...` - Any values returned from the server callback.

```lua
local val1, val2, ... = exports["kimi_callbacks"]:TriggerWithTimeout("my_callback", 3000, ...)
```

***

## TriggerAsync

Triggers a server callback with a default timeout of 5000ms and executes a callback function.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**handler** - `function` - The function to execute after the callback succeeded. It's parameters 
are the return values from the callback.<br>
**...** - `?` - The values you need to send to the server for the callback to work.

<font style="color:green;">**Handler signature:**</font><br>
**...** - `?` - The returned values from the client.

```lua
exports["kimi_callbacks"]:TriggerAsync("my_callback", function(val1, val2, ...)
	-- your code
end, ...)
```

***

## TriggerWithTimeoutAsync

Triggers a server callback with a specified timeout and executes a callback function.

<font style="color:red;">**Parameters:**</font><br>
**callbackName** - `string` - The name of the callback to execute.<br>
**timeout** - `number` - The timeout in milliseconds.<br>
**handler** - `function` - The function to execute after the callback succeeded. It's parameters 
are the return values from the callback.<br>
**...** - `?` - The values you need to send to the server for the callback to work.

<font style="color:green;">**Handler signature:**</font><br>
**...** - `?` - The returned values from the client.

```lua
exports["kimi_callbacks"]:TriggerWithTimeoutAsync("my_callback", 3000, function(val1, val2, ...)
	-- your code
end, ...)
```
