const spawnSync = require('child_process').spawnSync;
const writeFileSync = require('fs').writeFileSync;
const jsonfile = require('jsonfile');

let tsConfig = `./node_modules/typescript/lib/tsc --init`;
tsConfig = tsConfig.split(' ');
let createFiles = `package.json index.ts .env .gitignore README.md`;
createFiles = createFiles.split(' ');

console.log('Creating files...');
let createFile = spawnSync( 'touch', createFiles );
if (createFile.stderr) {
  console.log(createFile.stderr.toString());
}


//File contents:
const pkgJSON = {
  "name": "Typescript-Ready",
  "version": "0.0.0",
  "description": "description goes here",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run build:live",
    "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./index.ts"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^7.0.0",
    "nodemon": "^1.11.0",
    "ts-node": "^2.0.0",
    "typescript": "^2.1.5"
  }
};

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

const README = `
# NAME_GOES_HERE

### BASIC_INFO_OF_PROJECT_GOES_HERE

INFORMATION_GOES_HERE

## Install

\`\`\`
npm install NAME_GOES_HERE
\`\`\`

## Usage
\`\`\`
EXAMPLE_USAGE_GOES_HERE

\`\`\`
`

console.log('Writing to Files...');
jsonfile.writeFileSync('package.json', pkgJSON);
writeFileSync('.env', env);
writeFileSync('.gitignore', gitignore);
writeFileSync('README.md', README);



console.log('Installing Modules...');
let install = spawnSync( 'npm', ['install'] );
if (install.stderr) {
  console.log(install.stderr.toString());
}
let config = spawnSync( 'node', tsConfig );

let finish = spawnSync('clear');
console.log('Creation Complete');
