var pkg = require('./package.json');
var path = require('path');
var Builder = require('systemjs-builder');

var builder = new Builder();
var config = {
  baseURL: '.',
  transpiler: 'typescript',
  typescriptOptions: {
    module: 'cjs'
  },
  map: {
    'typescript': './node_modules/typescript/lib/typescript.js',
    '@angular/core': './node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common':'./node_modules/@angular/common/bundles/common.umd.js',
    '@angular/platform-browser':'./node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':'./node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    'rxjs':path.resolve('./node_modules/rxjs')
  },
  paths: {
    '*': '*.js'
  },
  meta: {
    'node_modules/@angular/*': {build: false},
    'node_modules/rxjs/*': {build: false}
  },
};

builder.config(config);

builder
.bundle('index', path.resolve(__dirname, 'bundles/', pkg.name + '.js'))
.then(function () {
  console.log('Build complete.');
})
.catch(function (err) {
  console.log('Error', err);
});
