#!/usr/bin/env node
'use strict';

var koa = require('koa');
var app = koa();
var argv = require('minimist')(process.argv.slice(2));
var defaultOptions = {
	path: '.',
	port: 8080
};
var port = (argv.port || defaultOptions.port);

var logger = function *(next) {
	console.log(this.method, this.url);
	yield next;
};

app.use(logger);
app.use(require('koa-static')(argv._[0] || defaultOptions.path));
app.listen(port);
console.log('Listening on port ' + port);
