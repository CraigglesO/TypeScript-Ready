# TypeScript-Ready [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

  [travis-image]: https://travis-ci.org/CraigglesO/TypeScript-Ready.svg?branch=master
  [travis-url]: https://travis-ci.org/CraigglesO/TypeScript-Ready
  [npm-image]: https://img.shields.io/npm/v/typescript-ready.svg
  [npm-url]: https://npmjs.org/package/typescript-ready
  [downloads-image]: https://img.shields.io/npm/dm/typescript-ready.svg
  [downloads-url]: https://npmjs.org/package/typescript-ready

### Quickly get a TypeScript environment up and running (BOILER-PLATE)

Simple project to get you up and going with typescript with one command.

## Install
Installing globally will make this a more useful template engine.

``` typescript
npm install -g typescript-ready
```

## Features
* Linting (typescript linting)
* blue-tape testing (blue-tape supports promises!)
* Keeps your files well organized in an out folder
* Github, NPM and @types ready
* The name of the project is pre-setup as the primary .ts and .d.ts file
* Travis Ready! Quick deployment and PR testings!
* Contribute file ready to go
* tsconfig with commonjs setup
* editorconfig for stylized publishing
* LICENSE file ready to go, dated and named to your github USERNAME
* typescript is node ready (tap-spec)
* nodemon AND onchange ready ('npm run start' or 'npm run watch' respectively)



If you can think of any features I am missing, LET ME KNOW!!!!

## Usage
``` typescript

typescript-ready

//Watch as files are created.

//Then test it out:
npm start

```

## Available Scripts

* `"test"`: Run test-cases
* `"start"`: Run a nodemon service for quick refreshing
* `"build:live"`: Build then run the built file
* `"build"`: Build for service
* `"lint"`: Quick linting service
* `"browser-test"`: Test your javascript in a browser
* `"source-test"`: test the file you're currently working on
* `"watch"`: this is an alternative to nodemon and has no lag
* `"types-publish"`: publish to @types
* `"all-tests"`: run all tests
* `"build+test"`: build and test without linting
* `"lint+build+test"`: lint, build and test for deployment
* `"prepublish"`: a typings publish

## Tree Structure

``` typescript
.
├── CONTRIBUTE.md
├── LICENSE
├── README.md
├── .env
├── .editorconfig
├── .gitignore
├── .git
├── index.d.ts
├── index.ts
├── package.json
├── test
│   └── test.ts
├── tsconfig.json
├── .travis.yml
├── typings
│   ├── globals
│   │   └── node
│   │       ├── index.d.ts
│   │       └── typings.json
│   ├── index.d.ts
│   └── modules
│       └── blue-tape
│           ├── index.d.ts
│           └── typings.json
└── typings.json
```

## ISC License (Open Source Initiative)

ISC License (ISC)
Copyright <YEAR> <OWNER>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
