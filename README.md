# What is this ?

Get perfect shadows every time for the non-designer.

# Installation

`npm i shadowImage --save`

Then...

```
    import { shadowImage } from 'shadowImage';  

    shadowImage({
        shadow_type: 'soft',
        padding: false
    });

```

## Options

ShadowImage supports 2 options, both of which are optional:

* *shadow_type* - _hard | soft_ (Defaults to soft)
* *padding* - _boolean_ (Defaults to false)