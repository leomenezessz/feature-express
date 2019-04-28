const path = require('path');
const fse = require('fs-extra');

const app = require('./global-feature-express');

const build = require('../lib/build');

const buildPath = path.resolve('./.feature-express/build');
const assetsPath = path.resolve(__dirname, '..', 'assets');
const languagesPath = path.resolve(__dirname, '..', 'lib', 'locales.js');

const displayLog = (message) => () => console.log(message, '\n');

const displayError = (message) => (err) => {
  throwError(message);
}
const throwError = (message) => {
  console.error(message, '\n\n');
  clearDirectory(buildPath)
    .then(() => process.exit(1))
    .catch(() => process.exit(1));
}

const simpleFseOperation = (methodName, onError) => (...args) => (...moreArgs) => new Promise((resolve, reject) => {
  fse[methodName](...[...args, ...moreArgs])
  .then(resolve)
  .catch(() => onError(...args));
});


const createDirectory = simpleFseOperation('mkdirp', dir => throwError(`Is not possible to create ${dir} directory. Check your permissions.`));
const copyDirectory = simpleFseOperation('copy', (from, to) => throwError(`Is not possible to copy assets to ${to} directory. Check your permissions.`));
const writeFile = simpleFseOperation('writeFile', file => throwError(`Is not possible to write feature express html in ${file}. Check your permissions.`));

const clearDirectory = dir => new Promise((resolve, reject) => {
  fse
  .exists(dir)
  .then((exists) => exists ? fse.emptyDir(dir) : false)
  .then(resolve)
  .catch(() => displayError(`Is not possible to clean ${dir} directory. Check your permissions.`));
});

clearDirectory(buildPath)
  .then(createDirectory(buildPath))
  .then(displayLog(`Creating build directory at ${buildPath}`))
  .then(copyDirectory(`${assetsPath}`, buildPath))
  .then(copyDirectory(`${languagesPath}`, `${buildPath}/js/locales.js`))
  .then(displayLog(`Copying static assets to build folder`))
  .then(() => build.getIndexPage(app))
  .then(writeFile(`${buildPath}/index.html`))
  .then(displayLog(`Build finished and located at ${buildPath}`))
  .then(() => process.exit(0))
  .catch(throwError);

