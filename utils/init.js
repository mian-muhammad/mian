const pkgJSON = require('./../package.json');
const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');

module.exports = () => {
	welcome({
		title: `Mian Muhammad`,
		tagLine: `Howdy, nice to meet you!`,
		description: pkgJSON.description,
		bgColor: `#8e43e7`,
		color: `#000000`,
		bold: true,
		clear: true,
		version: pkgJSON.version
	});

	checkNode('10');
};
