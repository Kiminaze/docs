# Exports (server)

## StartEarthquake

Starts the earthquake.

<mark style="color:red;">**Parameters:**</mark>\
**force** - `integer?` - The force applied to vehicles and objects (defaults to 1000 and can be omitted).\
**frequency** - `integer?` - The frequency at which the earth shakes (defaults to 3 and can be omitted).\
**direction** - `float?` - The direction of the earthquake (0.0-1.0 - randomized if not set and can be omitted)\
**seed** - `integer?` - The seed used for the randomization (defaults to os.time if not set and can be omitted).



***

## StopEarthquake

Stops the earthquake.
