### Features

#### Bus Search screen -- Harsh

-- sliceName: `search`

```javascript
{
    cities: [

    ],
    sourceSelectedCity: {},
    destinationSelectedCity: {},
    selectedDate: epoch
}

```

#### Filters -- Dhruv

-- sliceName: `filters`

```javascript
{
    busType: {
        available: [ "SLEEPER", "AC" , "NON-AC" ],
        selected: [ "SLEEPER", "AC" ]
    },
    priceRange: {
        min: "min price of all available tours"
        max: "max of all available tours",
        selectedMin: "user selected min price",
        selectedMax: "user selected maximum"
    },
    departureTime: {
        available: [],
        selected: []
    },
    busPartners: [
        "Orange travels",
        "Morning star travels",
        "CMR Express"
    ],
    boardingPoints: [
        {
            stopId: 2939,
            name: "Kukatpally"
        }
    ],
    droppingPoints: [
        {
            stopId: 3839,
            name: "Martahalli"
        }
    ]
}
```

#### Bus Card -- Amith

-- slicename: `tours`

```javascript
{
    tours: serverResponse,
    seatLayouts: {
        tourId: seatLayout
    }
}
```
