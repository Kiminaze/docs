
-- initialization
local ESX = exports["es_extended"]:getSharedObject()

-- register all commands
function RegisterCommands()
	ESX.RegisterCommand(attachClampCommand, commandPermissions, function(xPlayer, args, showError)
		OnAttachClampCommand(xPlayer.source)
	end, false, { help = "Attach a clamp to the closest vehicle wheel." })

	ESX.RegisterCommand(removeClampCommand, commandPermissions, function(xPlayer, args, showError)
		OnRemoveClampCommand(xPlayer.source)
	end, false, { help = "Remove the clamp from the closest vehicle wheel." })
end

-- register all items
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

-- check if a player has an item
function GetPlayerHasItem(playerId, itemName)
	local playerData = ESX.GetPlayerFromId(playerId)
	assert(playerData ~= nil, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	local item = playerData.getInventoryItem(itemName)
	return item ~= nil and item.count > 0
end

-- add an item to player inventory
function AddPlayerItem(playerId, itemName)
	local playerData = ESX.GetPlayerFromId(playerId)
	assert(playerData ~= nil, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	playerData.addInventoryItem(itemName, 1)
	return true
end

-- remove an item from player inventory
function RemovePlayerItem(playerId, itemName)
	local playerData = ESX.GetPlayerFromId(playerId)
	assert(playerData ~= nil, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	playerData.removeInventoryItem(itemName, 1)
end
