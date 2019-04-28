// If first valid argument is build, do static build
if(process.argv[2] === 'build') {
  process.argv.splice(2, 1);
  process.env.BUILD_MODE = true;
  require('./build-feature-express');
  return;
}

// Else, start feature express
require('./global-feature-express');
