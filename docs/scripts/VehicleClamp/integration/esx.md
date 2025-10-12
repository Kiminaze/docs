# ESX

## Ready-made file

You can either directly use this file to replace the original or use the instructions below to make the changes yourself and maybe learn a thing here and there.

{% file src="../../../.gitbook/assets/integrations.lua" %}
Integrations file ready-made for ESX
{% endfile %}

***

## Initialization

Add the following at the top of the file:

```lua
local ESX = exports["es_extended"]:getSharedObject()
```



***

## Register all commands

Replace the `RegisterCommands` function with the following:

<pre class="language-lua"><code class="lang-lua">function RegisterCommands()
<strong>	ESX.RegisterCommand(attachClampCommand, commandPermissions, function(xPlayer, args, showError)
</strong>		OnAttachClampCommand(xPlayer.source)
	end, false, { help = "Attach a clamp to the closest vehicle wheel." })

	ESX.RegisterCommand(removeClampCommand, commandPermissions, function(xPlayer, args, showError)
		OnRemoveClampCommand(xPlayer.source)
	end, false, { help = "Remove the clamp from the closest vehicle wheel." })
end
</code></pre>



***

## Register all items

Replace the `RegisterItems` function with the following:

```lua
function RegisterItems()
	if (clampItemName) then
		ESX.RegisterUsableItem(clampItemName, StartClampingProcess)
	end
	if (removalToolItemName) then
		ESX.RegisterUsableItem(removalToolItemName, StartRemovalProcess)
	end
	if (destroyItemName) then
		ESX.RegisterUsableItem(destroyItemName, StartDestructionProcess)
	end
end
```



***

## Check if a player has an item

Replace the `GetPlayerHasItem` function with the following:

```lua
function GetPlayerHasItem(playerId, itemName)
	local playerData = ESX.GetPlayerFromId(playerId)
	assert(playerData ~= nil, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	local item = playerData.getInventoryItem(itemName)
	return item ~= nil and item.count > 0
end
```



***

## Add an item to player inventory

Replace the `AddPlayerItem` function with the following:

```lua
function AddPlayerItem(playerId, itemName)
	local playerData = ESX.GetPlayerFromId(playerId)
	assert(playerData ~= nil, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	playerData.addInventoryItem(itemName, 1)
	return true
end
```



***

## Remove an item from player inventory

Replace the `RemovePlayerItem` function with the following:

```lua
function RemovePlayerItem(playerId, itemName)
	local playerData = ESX.GetPlayerFromId(playerId)
	assert(playerData ~= nil, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	playerData.removeInventoryItem(itemName, 1)
end
```
