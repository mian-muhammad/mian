#!/usr/bin/env node
const chalk = require('chalk');

const init = require('./utils/init');

const log = console.log;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const blogClr = chalk.hex(`#8e43e7`).bold.inverse;
const dim = chalk.dim;

(() => {
	init();

	log(`${chalk.italic(`Hello I'm Mian Muhammad, a software engineer.`)}

	🐦 ${twitterClr(` Twitter `)} ${dim(`https://twitter.com/mian_se`)}
	📖 ${githubClr(` GitHub `)}  ${dim(`https://github.com/mian-muhammad`)}
	🤖 ${blogClr(` Blog `)}    ${dim(`http://mianmuhammad.info/`)}
	`);
})();
