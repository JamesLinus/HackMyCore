HackMyAPI
=========

[![Latest release][img-release]][latest-release]
[![Build status (MASTER)][img-master]][travis-url-master]
[![Build status (DEV)][img-dev]][travis-url-dev]

*The open library for HackMyResume and FluentCV.*

Resume and career management reusables for HackMyResume, FluentCV, and [Your
Tool Here].

All [HackMyResume](https://hacksalot/HackMyResume)-related code that isn't
directly involved with the CLI lives here. Every important function and class is
exported via CommonJS / Node.js `module.exports` with UMD support forthcoming.

## Install

Install the latest stable release with NPM:

```bash
npm install hackmyapi --save
```

Install the latest `dev` version with NPM using this syntax:

```bash
npm install hacksalot/hackmyapi#dev --save
```

Or, clone from GitHub as usual (take a fork first):

```bash
git clone https://github.com/your-name/hackmyapi.git
```

## Use

For convenience, all classes and methods are exposed as properties off of the
module object:

```javascript
// Get the API facade (for convenience)
// You can also require individual components
// with require('hackmyapi/path/to/thing')
var HMR = require('hackmyapi');

// Create and open FRESHResume
var rezA = new HMR.FRESHResume();
rezA.open( 'path/to/resume.json' );

// Create and open a JRSResume
var rezB = new HMR.FRESHResume();
rezB.open( 'path/to/resume.json' );

// Create and invoke an instance of the HMR "build" verb
var build = new HMR.verbs.build({ });
build.invoke(['r1.json', 'r2.json'], ['out/resume.all'], { })l;

// Use other classes and methods on the HMR facade as needed.
```

You can also import individual classes like so:

```javascript
var FRESHResume = require('hackmyapi/src/[some-file]');
```

## License

MIT. See [LICENSE.md][lic] for details.

[lic]: https://github.com/hacksalot/HackMyAPI/blob/master/LICENSE.md
[img-release]: https://img.shields.io/github/release/hacksalot/HackMyAPI.svg?label=version
[img-master]: https://img.shields.io/travis/hacksalot/HackMyAPI/master.svg
[img-dev]: https://img.shields.io/travis/hacksalot/HackMyAPI/dev.svg?label=dev
[travis-url-master]: https://travis-ci.org/hacksalot/HackMyAPI?branch=master
[travis-url-dev]: https://travis-ci.org/hacksalot/HackMyAPI?branch=dev
[latest-release]: https://github.com/hacksalot/HackMyAPI/releases/latest
