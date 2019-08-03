[![Tsoding](https://img.shields.io/badge/twitch.tv-tsoding-purple?logo=twitch&style=for-the-badge)](https://www.twitch.tv/tsoding)
[![Build Status](https://travis-ci.org/tsoding/schedule.svg?branch=master)](https://travis-ci.org/tsoding/schedule)

# Schedule for Tsoding Streams

Schedule for Tsoding Streams. Front-End only Single Page Application without any Back-End. Makes all of the schedule building work yours computer problem. Saves me money on hosting.

Deployed in https://tsoding.github.io/schedule/

## Prerequisites

- [node.js] (v8.9.4+)
- [make]
- [bash]
- [coreutils]
- [inotifywatch]
- [python]
- [jq]

## Quick Start

```console
$ npm install
$ make
$ cd dist/
$ make -j4 watch                  # for watch mode
                                  # -j4 is required to run file watchers and http server
                                  # in parallel
$ <browser> http://localhost:8080/dist/
```

[inotifywait]: https://github.com/rvoicilas/inotify-tools
[node.js]: https://nodejs.org/en/
[make]: https://www.gnu.org/software/make/
[bash]: https://www.gnu.org/software/bash/
[coreutils]: https://www.gnu.org/software/coreutils/coreutils.html
[inotifywatch]: https://github.com/rvoicilas/inotify-tools
[python]: https://www.python.org/
[jq]: https://stedolan.github.io/jq/
