
# Exports (server)

## StartEarthquake

Starts the earthquake.

<font style="color:red;">**Parameters:**</font><br>
**force?** - `integer` - The force applied to vehicles and objects (defaults to 1000).<br>
**frequency?** - `integer` - The frequency at which the earth shakes (defaults to 3).<br>
**direction?** - `float` - The direction of the earthquake (0.0-1.0 - randomized if not set)<br>
**seed?** - `integer` - The seed used for the randomization (defaults to os.time if not set).

```lua
exports["EarthquakeSimulator"]:StartEarthquake(1000, 3, 0.5, os.time())
```

***

## StopEarthquake

Stops the earthquake.

```lua
exports["EarthquakeSimulator"]:StopEarthquake()
```
