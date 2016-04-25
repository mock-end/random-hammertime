# random-hammertime

> Generate a random hammertime.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-hammertime/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-hammertime/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-hammertime)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-hammertime/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-hammertime)


Hammertime is the name given to a [Unix time](http://en.wikipedia.org/wiki/Unix_time) with milliseconds. Which is the same as saying the number of milliseconds since 1970. It has finer granularity than a normal Unix timestamp and thus is often used in realtime applications.

According to startup lore, Hammertime was coined by a startup whose founder had an interesting interaction with M.C. Hammer. There was no name given to “Unix time with milliseconds” and while brainstorming ideas (because Unix time with milliseconds is a confusing mouthful), someone suggested Hammertime and it stuck.


## Install

```
$ npm install --save random-hammertime
```

## Usage

```js
var randomHammerTime = require('random-hammertime');

// API
// - randomHammerTime([options]);

// options
// - year
// - month
// - day
// - hour
// - minute
// - second
// - millisecond


randomHammerTime();
// => 2273327300317
```

## Related

- [random-year](https://github.com/mock-end/random-year) - Generate a random year.
- [random-month](https://github.com/mock-end/random-month) - Generate a random month.
- [random-day](https://github.com/mock-end/random-day) - Generate a random day of a month.
- [random-hour](https://github.com/mock-end/random-hour) - Generate a random hour.
- [random-minute](https://github.com/mock-end/random-minute) - Generate a random minute.
- [random-second](https://github.com/mock-end/random-second) - Generate a random second.
- [random-millisecond](https://github.com/mock-end/random-millisecond) - Generate a random millisecond.
- [random-weekday](https://github.com/mock-end/random-weekday) - Generate a random weekday.
- [random-datetime](https://github.com/mock-end/random-datetime) - Generate a random date. 
- [random-ampm](https://github.com/mock-end/random-ampm) - Return am or pm. Very simple.
- [random-timestamps](https://github.com/mock-end/random-timestamps) - Generate a timestamp. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-hammertime/issues/new).
