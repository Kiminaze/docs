
# Convars

Convars are an additional way to sync values across the whole server that can be set directly in 
the server.cfg or used as commands. AdvancedParking uses them for its logging system and 
telemetry.

<div class="infobox info" markdown="1">
All of AdvancedParking's convars are prefixed with the current resource name. If you change the 
resource name, you change the convar name!
</div>

<div class="infobox info" markdown="1">
All following convars can be set to `0` (disabled) or `1` (enabled).
</div>

## telemetry

Enables/disables telemetry. If enabled, sends AdvancedParking's server and client logs to our 
servers for analysis and debugging. Logs are stored for a maximum of 8 days under normal 
circumstances. Defaults to disabled unless using the experimental version.

Data includes:

* Any server/client log by AdvancedParking itself (includes disabled log levels)
* Resource version
* Server version
* Gamebuild

```
setr AdvancedParking_telemetry 0
```

***

## log_info

Enables/disables logging of info messages. Defaults to enabled.

```
setr AdvancedParking_log_info 1
```

***

## log_warning

Enables/disables logging of warnings. Defaults to enabled.

```
setr AdvancedParking_log_warning 1
```

***

## log_error

Enables/disables logging of errors.  Defaults to enabled.

```
setr AdvancedParking_log_error 1
```

***

## log_debug

Enables/disables logging of debug messages. Defaults to disabled unless using the experimental 
version. Will output a lot of data to the console.

```
setr AdvancedParking_log_debug 0
```
