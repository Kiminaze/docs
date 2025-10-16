
# Commands

## eq [force] [frequency] [direction] [seed]

Starts the earthquake or stops it when one is going on right now.

<font style="color:red;">**Parameters:**</font><br>
**force** - `integer?` - The force applied to vehicles and objects (defaults to 1000 and can be 
omitted).<br>
**frequency** - `integer?` - The frequency at which the earth shakes (defaults to 3 and can be 
omitted).<br>
**direction** - `float?` - The direction of the earthquake (0.0-1.0 - randomized if not set and can 
be omitted)<br>
**seed** - `integer?` - The seed used for the randomization (defaults to os.time if not set and can 
be omitted).

```
/eq 1000 3
```
