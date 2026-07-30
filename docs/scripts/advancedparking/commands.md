
# Commands

## Syntax
```
<parameter> — required parameter
[parameter] — optional parameter
<a|b> — required choice between a and b
[a|b] — optional choice between a and b
```

***

## Delete all vehicles

Deletes all vehicles from the database. Needs to be executed twice to take effect.

```
/deletesavedvehicles
```

***

## Delete and store all vehicles

Deletes all vehicles from the database and stores them in the garage. Needs to be executed twice to 
take effect.

```
/deleteandstore
```

***

## Delete vehicle

Deletes a vehicle using a plate or AdvancedParking's internal identifier.

```
/apdv <plate|identifier>
```

***

## Bring vehicle

Brings a vehicle to the player using a plate or AdvancedParking's internal identifier.

```
/apbring <plate|identifier>
```

***

## Manual cleanup

Start a manual cleanup with optional support for individual modes.<br>
**owned** - Only owned vehicles.<br>
**saved** - Only saved vehicles that are not owned.<br>
**all** - All other vehicles.

```
/cleanup [owned|saved|all]
```

***

## Quadtree debug

Debug command that shows a very crude visualisation of vehicle positions.

```
/qtdebug
```
