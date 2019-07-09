# @appgeist/ensure-dir

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]

Utility function to ensure a directory path exists and return a Promise.
Uses [mkdirp](https://www.npmjs.com/package/mkdirp) under the hood.

## Usage

```js
const ensureDir = require("@appgeist/ensure-dir");

await ensureDir("/folder/to/store/lotsa/files");
```

### Why not [mkdirp-promise](https://www.npmjs.com/package/mkdirp-promise)?

@appgeist/ensure-dir should be slightly more efficient than [mkdirp-promise](https://www.npmjs.com/package/mkdirp-promise) because it checks whether the specified path exists before trying to create it.

[npm-image]: https://img.shields.io/npm/v/@appgeist/ensure-dir.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@appgeist/ensure-dir
[license-image]: https://img.shields.io/npm/l/@appgeist/ensure-dir.svg?style=flat-square
[license-url]: LICENSE
