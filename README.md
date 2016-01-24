HackMyCore
==========

[![Latest release][img-release]][latest-release]
[![Build status (MASTER)][img-master]][travis-url-master]
[![Build status (DEV)][img-dev]][travis-url-dev]

*The open core library for HackMyResume and FluentCV.*

Core resume and career management (RACM) classes and routines used by
[HackMyResume](hmr) and FluentCV among other tools. Free and open-source under the MIT
License.

## Install

Install the latest stable release with NPM:

```bash
npm install hackmycore --save
```

Install the latest `dev` version with NPM using this syntax:

```bash
npm install hacksalot/hackmycore#dev --save
```

Or, clone from GitHub as usual (take a fork first):

```bash
git clone https://github.com/your-name/hackmyapi.git
```

## Use

All [HackMyResume](https://hacksalot/HackMyResume)-related code that isn't
directly involved with the CLI lives here. Every important function and class is
exported via CommonJS / Node.js `module.exports` with UMD support forthcoming.
For convenience, all classes and methods are exposed as properties on the module
object:

```javascript
// Get the API facade (for convenience)
// You can also require individual components
// with require('hackmycore/path/to/thing')
var HMR = require('hackmycore');

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
var FRESHResume = require('hackmycore/src/[some-file]');
```

## License

MIT. See [LICENSE.md][lic] for details.

[lic]: https://github.com/hacksalot/HackMyCore/blob/master/LICENSE.md
[img-release]: https://img.shields.io/github/release/hacksalot/HackMyCore.svg?label=version
[img-master]: https://img.shields.io/travis/hacksalot/HackMyCore/master.svg
[img-dev]: https://img.shields.io/travis/hacksalot/HackMyCore/dev.svg?label=dev
[travis-url-master]: https://travis-ci.org/hacksalot/HackMyCore?branch=master
[travis-url-dev]: https://travis-ci.org/hacksalot/HackMyCore?branch=dev
[latest-release]: https://github.com/hacksalot/HackMyCore/releases/latest
[hmr]: https://github.com/hacksalot/HackMyCore
