
---
description: >-
  Convars are an additional way to sync values across the whole server that can
  be set directly in the server.cfg or used as commands. AdvancedParking uses
  them for its logging system and telemetry.
---

# Convars

{% hint style="info" %}
All of AdvancedParking's convars are prefixed with the current resource name. If you change the resource name, you change the convar name!
{% endhint %}

{% hint style="info" %}
All following convars can be set to `0` (disabled) or `1` (enabled). The default value is shown in the example below.
{% endhint %}

## telemetry

Enables/disables telemetry. If enabled, sends AdvancedParking's server and client logs to our servers for analysis and debugging. Logs are stored for approximately 7 days under normal circumstances.

Data includes:

* any server/client log by AdvancedParking itself (even if disabled)
* Resource version
* Server version
* Gamebuild

```
setr AdvancedParking_telemetry 0
```



***

## log\_info

Enables/disables logging of info messages. Should generally stay enabled.

```
setr AdvancedParking_log_info 1
```

***

## log\_warning

Enables/disables logging of warnings. Should generally stay enabled.

```
setr AdvancedParking_log_warning 1
```

***

## log\_error

Enables/disables logging of errors. Should generally stay enabled.

```
setr AdvancedParking_log_error 1
```

***

## log\_debug

Enables/disables logging of debug messages. Should only be enabled if actively debugging. Will output a lot of data to the console.

```
setr AdvancedParking_log_debug 0
```
