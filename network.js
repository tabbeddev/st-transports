const network = {
    lines: [
        {
            name: 'UST 1',
            stations: [
                'Evergreen',
                'Outpost',
                'Seacrestica',
                'Pagasa City',
                'Illyria'
            ]
        },
        {
            name: 'UST 2',
            stations: [
                'Illyria',
                'Pagasa City',
                'Seacrestica',
                'Outpost',
                'Evergreen'
            ]
        },
        {
            name: 'UST 3',
            stations: [
                'Malus',
                'Outpost',
                'Eden'
            ]
        },
        {
            name: 'UST 4',
            stations: [
                'Eden',
                'Outpost',
                'Malus'
            ]
        },
        {
            name: 'USTe 1',
            stations: [
                'Evergreen',
                'Banal-Witchita',
                'Ekilorea'
            ]
        },
        {
            name: 'USTe 2',
            stations: [
                'Ekilorea',
                'Banal-Witchita',
                'Evergreen'
            ]
        }
    ],
    stations: [
        {
            name: 'Evergreen',
            lines: [
                {
                    name: 'UST 1',
                    platform: 0
                },
                {
                    name: 'UST 2',
                    platform: 0
                },
                {
                    name: 'USTe 1',
                    platform: 0
                },
                {
                    name: 'USTe 2',
                    platform: 0
                }
            ]
        },
        {
            name: 'Banal-Witchita',
            lines: [
                {
                    name: 'USTe 1',
                    platform: 0
                },
                {
                    name: 'USTe 2',
                    platform: 0
                }
            ]
        },
        {
            name: 'Ekilorea',
            lines: [
                {
                    name: 'USTe 1',
                    platform: 0
                },
                {
                    name: 'USTe 2',
                    platform: 0
                }
            ]
        },
        {
            name: 'Outpost',
            lines: [
                {
                    name: 'UST 1',
                    platform: 3
                },
                {
                    name: 'UST 2',
                    platform: 4
                },
                {
                    name: 'UST 3',
                    platform: 2
                },
                {
                    name: 'UST 4',
                    platform: 1
                }
            ]
        },
        {
            name: 'Seacrestica',
            lines: [
                {
                    name: 'UST 1',
                    platform: 1
                },
                {
                    name: 'UST 2',
                    platform: 2
                }
            ]
        },
        {
            name: 'Pagasa City',
            lines: [
                {
                    name: 'UST 1',
                    platform: 1
                },
                {
                    name: 'UST 2',
                    platform: 2
                }
            ]
        },
        {
            name: 'Illyria',
            lines: [
                {
                    name: 'UST 1',
                    platform: 0
                },
                {
                    name: 'UST 2',
                    platform: 0
                }
            ]
        },
        {
            name: 'Malus',
            lines: [
                {
                    name: 'UST 3',
                    platform: 0
                },
                {
                    name: 'UST 4',
                    platform: 0
                }
            ]
        },
        {
            name: 'Eden',
            lines: [
                {
                    name: 'UST 3',
                    platform: 0
                },
                {
                    name: 'UST 4',
                    platform: 0
                }
            ]
        }
    ],
    doublelines: [
        ['UST 1', 'UST 2'],
        ['UST 3', 'UST 4'],
        ['USTe 1', 'USTe 2']
    ],
    traveltimes: [
        {
            start: 'Evergreen',
            end: 'Outpost',
            time: 42
        },
        {
            start: 'Outpost',
            end: 'Seacrestica',
            time: 24
        },
        {
            start: 'Pagasa City',
            end: 'Seacrestica',
            time: 270
        },
        {
            start: 'Illyria',
            end: 'Pagasa City',
            time: 32
        },
        {
            start: 'Malus',
            end: 'Outpost',
            time: 114
        },
        {
            start: 'Eden',
            end: 'Malus',
            time: 60
        },
        {
            start: 'Eden',
            end: 'Outpost',
            time: 60
        },
        {
            start: 'Banal-Witchita',
            end: 'Evergreen',
            time: 60
        },
        {
            start: 'Banal-Witchita',
            end: 'Ekilorea',
            time: 60
        }
    ],
    prices: {
        1: 4,
        2: 2
    }
};