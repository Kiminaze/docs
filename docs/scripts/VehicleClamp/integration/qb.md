# QB

## Ready-made file

You can either directly use this file to replace the original or use the instructions below to make the changes yourself and maybe learn a thing here and there.

{% file src="../../../.gitbook/assets/integrations (1).lua" %}
Integrations file ready-made for QB
{% endfile %}

***

## Initialization

Add the following at the top of the file:

```lua
local QB = exports["qb-core"]:GetCoreObject()
```



***

## Register all commands

Replace the `RegisterCommands` function with the following:

```lua
function RegisterCommands()
	QB.Commands.Add(attachClampCommand, "Attach a clamp to the closest vehicle wheel.", nil, false, OnAttachClampCommand, table.unpack(commandPermissions))
	QB.Commands.Add(removeClampCommand, "Remove the clamp from the closest vehicle wheel.", nil, false, OnRemoveClampCommand, table.unpack(commandPermissions))
end
```



***

## Register all items

Replace the `RegisterItems` function with the following:

```lua
function RegisterItems()
	if (clampItemName) then
		QB.Functions.CreateUseableItem(clampItemName, StartClampingProcess)
	end
	if (removalToolItemName) then
		QB.Functions.CreateUseableItem(removalToolItemName, StartRemovalProcess)
	end
	if (destroyItemName) then
		QB.Functions.CreateUseableItem(destroyItemName, StartDestructionProcess)
	end
end
```



***

## Check if a player has an item

Replace the `GetPlayerHasItem` function with the following:

```lua
function GetPlayerHasItem(playerId, itemName)
	local player = QB.Functions.GetPlayer(playerId)
	assert(player, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	return player.Functions.GetItemByName(itemName) ~= nil
end
```



***

## Add an item to player inventory

Replace the `AddPlayerItem` function with the following:

```lua
function AddPlayerItem(playerId, itemName)
	local player = QB.Functions.GetPlayer(playerId)
	assert(player, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	return player.Functions.AddItem(itemName, 1)
end
```



***

## Remove an item from player inventory

Replace the `RemovePlayerItem` function with the following:

```lua
function RemovePlayerItem(playerId, itemName)
	local player = QB.Functions.GetPlayer(playerId)
	assert(player, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	player.Functions.RemoveItem(itemName, 1)
end
```
