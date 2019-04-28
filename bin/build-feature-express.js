const path = require('path');
const fse = require('fs-extra');

const app = require('./global-feature-express');

const build = require('../lib/build');

const buildPath = path.resolve('./.feature-express/build');
const assetsPath = path.resolve(__dirname, '..', 'assets');
const languagesPath = path.resolve(__dirname, '..', 'lib', 'locales.js');

const displayLog = (message) => () => console.log(message, '\n');

const displayError = (message) => (err) => {
  console.error(err);
  throwError(message);
}
const throwError = (message) => {
  console.error(message, '\n\n');
  clearDirectory(buildPath)
    .then(() => process.exit(1))
    .catch(() => process.exit(1));
}

const clearDirectory = dir => new Promise((resolve, reject) => {
  fse
  .exists(dir)
  .then((exists) => exists ? fse.emptyDir(dir) : false)
  .then(resolve)
  .catch(displayError(`Is not possible to clean ${dir} directory. Check your permissions.`));
});

const createDirectory = dir => () => new Promise((resolve, reject) => {
  fse
  .mkdirp(dir)
  .then(resolve)
  .catch(displayError(`Is not possible to create ${dir} directory. Check your permissions.`));
});

const copyDirectory = (from, to) => () => new Promise((resolve, reject) => {
  fse
  .copy(from, to)
  .then(resolve)
  .catch(displayError(`Is not possible to copy assets to ${to} directory. Check your permissions.`));
});

const writeFile = file => content => new Promise((resolve, reject) => {
  fse
  .writeFile(file, content)
  .then(resolve)
  .catch(displayError(`Is not possible to write feature express html in ${file}. Check your permissions.`));
});

const steps =
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

