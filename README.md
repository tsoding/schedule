[![Build Status](https://travis-ci.org/tsoding/schedule-beta.svg?branch=master)](https://travis-ci.org/tsoding/schedule-beta)

# Schedule for Tsoding Streams

Deployed in https://tsoding.github.io/schedule-beta/

## Prerequisites

- [node.js] (v8.9.4+)
- [make]
- [bash]
- [coreutils]
- [inotifywatch]

## Quick Start

```console
$ npm install
$ make
$ <browser> dist/index.html
$ make -j3 watch                  # for watch mode
                                  # -j3 is required to run scss and ts watchers in parallel
```

[inotifywait]: https://github.com/rvoicilas/inotify-tools
[node.js]: https://nodejs.org/en/
[make]: https://www.gnu.org/software/make/
[bash]: https://www.gnu.org/software/bash/
[coreutils]: https://www.gnu.org/software/coreutils/coreutils.html
[inotifywatch]: https://github.com/rvoicilas/inotify-tools
