# lineageos-stats

**NOTE:** This is now deprecated as there is an official API [here](https://stats.lineageos.org/api/v1/stats).

An API to scrape all the relevant statistics from stats.lineageos.org.

## Stats included
* Ranking of models in terms of number of installs
* Ranking of countries in terms of number of installs
* Total installs
* Last updated time

## Installation
```sh
npm i lineageos-stats
```

## Usage
```js
const stats = require('lineageos-stats');

// Total active installs
stats.getTotalInstalls().then(installs => console.log(installs));
// 1572232

// Last updated time (elapsed since epoch)
stats.getLastUpdated().then(updated => console.log(updated));
// 1517756940000

// Active models
stats.getModels().then(models => console.log(models));
// [
//  { name: 'bacon', ranking: 1, installs: 69825 },
//  { name: 'i9300', ranking: 2, installs: 53035 },
//  { name: 'klte', ranking: 3, installs: 37613 },
//  { name: 'osprey', ranking: 4, installs: 37461 },
//  { name: 'mido', ranking: 5, installs: 35244 },
//  ...
// ]

// Active countries
stats.getCountries().then(countries => console.log(countries));
// [
//  { code: 'Unknown', ranking: 1, installs: 639729 },
//  { code: 'in', ranking: 2, installs: 115610 },
//  { code: 'br', ranking: 3, installs: 76996 },
//  { code: 'cn', ranking: 4, installs: 74099 },
//  { code: 'de', ranking: 5, installs: 65356 },
//  ...
// ]
```
