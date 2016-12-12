//this file is not  transpiled use CommonJS or ES5

//register babel to transpile files before test run
require('babel-register')();

//Disable webpack feature which Mocha doesnt support
require.extensions['.css']=function(){
};
