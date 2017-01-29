const spawnSync = require('child_process').spawnSync;
const writeFileSync = require('fs').writeFileSync;
const fs = require('fs');
const rl = require('readline');

const YEAR = new Date().getFullYear();

let USERNAME     = '';
let HANDLE       = '';
let PROJECT_NAME = '';

function ask(question, callback) {
  var r = rl.createInterface({
    input: process.stdin,
    output: process.stdout});
  r.question(question + '\n', function(answer) {
    r.close();
    callback(answer);
  });
}

//File contents:
const pkgJSON = `{
  "name": "${PROJECT_NAME}",
  "version": "0.0.0",
  "description": "DESCRIPTION_GOES_HERE",
  "main": "./out/${PROJECT_NAME}.js",
  "scripts": {
    "test": "echo running server tests... && cd test && ts-node ../node_modules/blue-tape/bin/blue-tape \\"**/*.ts\\" | tap-spec",
    "start": "npm run build:live",
    "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./${PROJECT_NAME}.ts",
    "build": "echo building... && typings bundle -o out/${PROJECT_NAME}.d.ts",
    "lint": "echo linting... && tslint \\"**/*.ts\\" -e \\"source/**\\" -e \\"source-test/**\\" -e \\"out/**\\" -e \\"node_modules/**\\" -e \\"typings/**\\"",
    "browser-test": "echo running browser tests... && echo no browser test",
    "source-test": "echo running source tests... &&  echo no source test",
    "watch": "onchange -w \\"**/*.ts\\" -i -e \\"out/**\\" -- npm -s run build+test",
    "types-publish": "npm -s run lint+build+test && echo please publish to typings/registry",
    "all-tests": "npm test",
    "build+test": "npm run build && npm run all-tests",
    "lint+build+test": "npm run lint && npm run build+test",
    "prepublish": "typings install"
  },
  "author": "${USERNAME}",
  "repository" : {
    "type" : "git",
    "url" : "${HANDLE}"
  },
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^7.0.0",
    "blue-tape": "^1.0.0",
    "tap-spec": "^4.1.1",
    "nodemon": "^1.11.0",
    "ts-node": "^2.0.0",
    "typescript": "^2.1.5",
    "tslint": "^4.3.1",
    "tslint-config-typings": "^0.3.1",
    "onchange": "^3.2.1",
    "typings": "^2.1.0"
  }
}`;

  const env = "";

  const gitignore = `
lib-cov
*.seed
*.log
*.csv
*.dat
*.out
*.pid
*.gz

.env
pids
logs
results

node_modules
npm-debug.log
  `;

  const README = `# ${PROJECT_NAME} [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://travis-ci.org/${USERNAME}/${PROJECT_NAME}.svg?branch=master
[travis-url]: https://travis-ci.org/${USERNAME}/${PROJECT_NAME}
[npm-image]: https://img.shields.io/npm/v/${PROJECT_NAME}.svg
[npm-url]: https://npmjs.org/package/${PROJECT_NAME}
[downloads-image]: https://img.shields.io/npm/dm/${PROJECT_NAME}.svg
[downloads-url]: https://npmjs.org/package/${PROJECT_NAME}

### BASIC_INFO_OF_PROJECT_GOES_HERE

INFORMATION_GOES_HERE

## Install

\`\`\` typescript
npm install ${PROJECT_NAME}
\`\`\`

## Usage
\`\`\` typescript
import * as x from "${PROJECT_NAME}"

EXAMPLE_USAGE_GOES_HERE

\`\`\`

## ISC License (Open Source Initiative)

ISC License (ISC)
Copyright ${YEAR} <${USERNAME}>
Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC")
Copyright (c) 1995-2003 by Internet Software Consortium


Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
`;

  const indexTs = `

  function ready() {
    return true;
  }

  export { ready } `;



  const ISC = `ISC License (ISC)
  Copyright ${YEAR} - ${USERNAME}

  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;

  const contr = `# Contributing Guidelines

Contributions welcome!

**Before spending lots of time on something, ask for feedback on your idea first!**

Please search issues and pull requests before adding something new to avoid duplicating
efforts and conversations.

This project welcomes non-code contributions, too! The following types of contributions
are welcome:

- **Ideas**: participate in an issue thread or start your own to have your voice heard.
- **Writing**: contribute your expertise in an area by helping expand the included docs.
- **Copy editing**: fix typos, clarify language, and improve the quality of the docs.
- **Formatting**: help keep docs easy to read with consistent formatting.

## Code Style

This repository uses typescript with commonJS to maintain code style and consistency,
and to avoid style arguments.

## Project Governance

Individuals making significant and valuable contributions are given commit-access to the
project to contribute as they see fit. This project is more like an open wiki than a
standard guarded open source project.

### Rules

There are a few basic ground-rules for contributors:

1. **No \`--force\` pushes** or modifying the Git history in any way.
2. **Non-master branches** should be used for ongoing work.
3. **Significant modifications** like API changes should be subject to a **pull request**
   to solicit feedback from other contributors.
4. **Pull requests** are *encouraged* for all contributions to solicit feedback, but left to
   the discretion of the contributor.

### Releases

Declaring formal releases remains the prerogative of the project maintainer.

### Changes to this arrangement

This is an experiment and feedback is welcome! This document may also be subject to pull-
requests or changes by contributors where you believe you have something valuable to add
or change.

## Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

- (a) The contribution was created in whole or in part by me and I have the right to
  submit it under the open source license indicated in the file; or

- (b) The contribution is based upon previous work that, to the best of my knowledge, is
  covered under an appropriate open source license and I have the right under that license
  to submit that work with modifications, whether created in whole or in part by me, under
  the same open source license (unless I am permitted to submit under a different
  license), as indicated in the file; or

- (c) The contribution was provided directly to me by some other person who certified
  (a), (b) or (c) and I have not modified it.

- (d) I understand and agree that this project and the contribution are public and that a
  record of the contribution (including all personal information I submit with it,
  including my sign-off) is maintained indefinitely and may be redistributed consistent
  with this project or the open source license(s) involved.`;

  const tsconfig = `{
      "compilerOptions": {
          "module": "commonjs",
          "target": "es6",
          "noImplicitAny": false,
          "sourceMap": false,
          "outDir": "out"
      }
  }
  `;

  const tst = `import * as test from "blue-tape";
import { ready } from "../${PROJECT_NAME}";

test('Test Typescript-Ready', (t) => {
  t.plan(1);

  t.true( ready() );

  t.end();
});
  `;

  const travis = `language: node_js

notifications:
  email:
    on_success: never
    on_failure: change

node_js:
  - "stable"

script:
  - npm run lint+build+test
  `;

  const typings = `{
  "name": "${PROJECT_NAME}",
  "main": "${PROJECT_NAME}.d.ts",
  "homepage": "",
  "version": "0.8.2",
  "globalDevDependencies": {
    "node": "registry:env/node#6.0.0+20170119204930"
  },
  "devDependencies": {
    "blue-tape": "registry:npm/blue-tape#0.2.0+20160723033700"
  }
}
  `;

  const indexD = `import I = require("./${PROJECT_NAME}");

  export = I;
  `;

  const econfig = `root = true

[*]
charset = utf-8
end_of_line = lf
trim_trailing_whitespace = true

[*.json]
indent_size = 2
indent_style = space

[*.{js,jsx,ts,tsx}]
indent_size = 2
indent_style = space
insert_final_newline = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false`;

ask('Please input your github project handle: \n Example: https://github.com/CraigglesO/typescript-ready.git', function(answer) {
  console.log(answer);
  if (!answer) {
    console.log('sorry, you need to insert a github handle');
    return;
  }
  HANDLE       = answer;
  let r        = answer.split('.git')[0];
      r        = r.split('/')
  PROJECT_NAME = r.slice(-1)[0];
  USERNAME     = r.slice(-2)[0];





  let tsConfig = `./node_modules/typescript/lib/tsc --init`;
  tsConfig = tsConfig.split(' ');
  let createFiles = `package.json tsconfig.json .env .gitignore README.md LICENSE CONTRIBUTE.md .travis.yml typings.json .editorconfig`;
  createFiles = createFiles.split(' ');

  console.log('Creating files...');
  let createFile = spawnSync( 'touch', createFiles );
  if (createFile.stderr) {
    console.log(createFile.stderr.toString());
  }
  if (!fs.existsSync("test")){
      fs.mkdirSync("test");
  }

  console.log('Writing to Files...');
  writeFileSync('package.json', pkgJSON);
  writeFileSync('.env', env);
  writeFileSync('.gitignore', gitignore);
  writeFileSync(`${PROJECT_NAME}.ts`, indexTs);
  writeFileSync(`${PROJECT_NAME}.d.ts`, indexD);
  writeFileSync('README.md', README);
  writeFileSync('LICENSE', ISC);
  writeFileSync('CONTRIBUTE.md', contr);
  writeFileSync('tsconfig.json', tsconfig);
  writeFileSync('.travis.yml', travis);
  writeFileSync('typings.json', typings);
  // Test file:
  writeFileSync('./test/test.ts', tst);
  writeFileSync('.editorconfig', econfig);



  finishUp();
  return true;
});

function finishUp() {
  console.log('Installing Modules...');
  let install = spawnSync( 'npm', ['install'] );
  if (install.stderr) {
    console.log(install.stderr.toString());
  }
  let config = spawnSync( 'node', tsConfig );

  console.log('Preping GIT...')
  let git = spawnSync( 'git', ['init'] );
  if (git.stderr) {
    console.log(install.stderr.toString());
  }
  let gitDown = spawnSync( 'git', ['remote', 'add', 'origin', HANDLE] );
  if (gitDown.stderr) {
    console.log(install.stderr.toString());
  }

  let finish = spawnSync('clear');
  console.log('Creation Complete');

  console.log(`



  Run \'npm start\' to begin.



  `);

}
