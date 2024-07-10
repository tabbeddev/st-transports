# Seacrestica Transports (Website)

## What is Seacrestica Transports?

See [here](https://wiki.ultravanilla.world/wiki/Seacrestica_Transports).

## And what is THIS now?

THIS is the online website for route finding in the Seacrestica Transports network.

If you want to lern more about the background processes just continue reading. :)

# How it works

You may ask how an entire Railroad system can be digitalized. So lets start with that:

## Network

The network is stored inside the ```routing.js```-file as an json dictionary. It consists out of 5 different data types.

### 1. Lines

Example: 
```javascript
lines: [
    {
        name: "UST 1",
        stations: [
            "Evergreen",
            "Outpost",
            "Seacrestica",
            "Pagasa City",
            "Illyria"
        ]
    }
]
```

So lets break one entry down:

- name: The name of the Line. "UST" and "USTe" are replaced in the website to "UltraStar" and "UltraStar express"
- stations: A list of every station the line stops at. From the first station to the final station. Every Station must also be defined in the Station array.

### 2. Station

Example:
```javascript
stations: [
    {
        name: "Evergreen",
        lines: [{
            name: "UST 1",
            platform: 1
        }, {
            name: "UST 2",
            platform: 2
        }, {
            name: "USTe 1",
            platform: 3
        }, {
            name: "USTe 2",
            platform: 4
        }]
    }
]
```

Lets break it down:

- name: The name of the station.
- lines: Every line that stops at this station.
    - name: The line's name
    - platform: The platform where the train stops

### 3. Doublelines

Example:

```javascript
doublelines: [
    ["UST 1", "UST 2"]
]
```

If two lines have the same stops just in reverse, they must be listed here.

This is intended to avoid pointless stops in the route finding algorithm.

### 4. Pricing

Please don't touch that. thank you :)

## Route finding

So now we know how the network works, we can start learning how the route finding algorithm works.

The route finding algorithm uses the [Depth-First searching algorithm](https://en.wikipedia.org/wiki/Depth-first_search?useskin=vector). I'm not going to explain how it works. Please just accept that it works.