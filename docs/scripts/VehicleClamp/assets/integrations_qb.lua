
-- initialization
local QB = exports["qb-core"]:GetCoreObject()

-- register all commands
function RegisterCommands()
	QB.Commands.Add(attachClampCommand, "Attach a clamp to the closest vehicle wheel.", nil, false, OnAttachClampCommand, table.unpack(commandPermissions))
	QB.Commands.Add(removeClampCommand, "Remove the clamp from the closest vehicle wheel.", nil, false, OnRemoveClampCommand, table.unpack(commandPermissions))
end

-- register all items
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

-- check if a player has an item
function GetPlayerHasItem(playerId, itemName)
	local player = QB.Functions.GetPlayer(playerId)
	assert(player, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	return player.Functions.GetItemByName(itemName) ~= nil
end

-- add an item to player inventory
function AddPlayerItem(playerId, itemName)
	local player = QB.Functions.GetPlayer(playerId)
	assert(player, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	return player.Functions.AddItem(itemName, 1)
end

-- remove an item from player inventory
function RemovePlayerItem(playerId, itemName)
	local player = QB.Functions.GetPlayer(playerId)
	assert(player, ("\"PlayerData\" could not be found for player \"%s\""):format(GetPlayerName(playerId)))
	player.Functions.RemoveItem(itemName, 1)
end
