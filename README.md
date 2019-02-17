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

## Quick Start

```console
$ npm install
$ make
$ cd dist/
$ python -m SimpleHTTPServer 8080
$ <browser> http://localhost:8080/
$ make -j3 watch                  # for watch mode
                                  # -j3 is required to run scss and ts watchers in parallel
```

[inotifywait]: https://github.com/rvoicilas/inotify-tools
[node.js]: https://nodejs.org/en/
[make]: https://www.gnu.org/software/make/
[bash]: https://www.gnu.org/software/bash/
[coreutils]: https://www.gnu.org/software/coreutils/coreutils.html
[inotifywatch]: https://github.com/rvoicilas/inotify-tools
[python]: https://www.python.org/
