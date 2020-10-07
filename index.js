#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
	title: pkgJSON.name,
	tagLine: `Howdy, nice to meet you!`,
	description: pkgJSON.description,
	bgColor: `#fca326`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: pkgJSON.version
});

console.log(`
Mian Muhammad

Hello I'm Mian Muhammad, a software engineer.

🐦 Twitter: https://twitter.com/mian_se
📖 GitHub:  https://github.com/mian-muhammad
🤖 Blog:    http://mianmuhammad.info/

`);
