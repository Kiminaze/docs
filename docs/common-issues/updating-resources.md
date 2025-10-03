
# Updating resources

Our resources always come with a version checker that will notify you in your server console if 
there has been an update. It also contains information like patch notes, so make sure to read them 
even if they seem unimportant at first.

{% hint style="info" %}
The keymaster site also shows you updates to resources that you have not yet downloaded with a 
<mark style="background-color:blue;">NEW</mark>-badge next to them.
{% endhint %}

## How to update properly

Most updates are simply drag'n'drop jobs and don't really require any attention by you. However 
keep in mind that simply overwriting files could potentially cause issues! It is always recommended 
to first backup your old version and then drag over the new version.

If you are simply overwriting existing files, remember that you might at least want to keep your 
config if you changed anything from the default values.

{% hint style="info" %}
Updates that change anything in the config will mention this in the patch notes!
{% endhint %}

***

## Versioning

You can find your current version inside the `fxmanifest.lua` as three numbers separate by a dot. 
This is called "semantic versioning". Just by looking at version numbers you can already kind of 
see what happened in the last update.

In my resources the first number denotes the **major** version, the second number is the **patch** 
(or minor) version and the third number usually is reserved for **fixes**.\
`major.patch.fix`

* Major version changes usually denote really big changes to a resource that might also be breaking 
  backwards compatibility. Breaking changes will always be announced and might require you to do 
  something specific. A major version can also contain patches and fixes.
* Changes in the patch number usually relate to new features being implemented or existing things 
  changed around. These should never be breaking. A patch can also contain fixes.
* Changes in the fix number are usually only related to fixing issues like bugs or errors.
