# Exports (server)

## StartTracker

Starts tracking the vehicle with the specified plate for a player.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The player id of the player to start the tracker for.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleTracker"]:StartTracker(playerId, plate)
</strong></code></pre>



***

## StopTracker

Stops tracking the vehicle with the specified plate for a player.

<mark style="color:red;">**Parameters:**</mark>\
**playerId** - `int` - The player id of the player to stop the tracker for.\
**plate** - `string` - The license plate text of a vehicle.

<mark style="color:green;">**Returns:**</mark>\
`bool` - True on success.

<pre class="language-lua"><code class="lang-lua"><strong>local success = exports["VehicleTracker"]:StopTracker(playerId, plate)
</strong></code></pre>
