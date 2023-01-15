module.exports = {
	rules: {
		'prefer-pascal-case-enums': require('./lib/rules/prefer-pascal-case-enums'),
		'prefer-spruce-hash-import': require('./lib/rules/prefer-spruce-hash-import'),
		'prohibit-import-from-build-folder': require('./lib/rules/prohibit-import-from-build-folder'),
		'prohibit-import-of-schema-in-builders': require('./lib/rules/prohibit-import-of-schema-in-builders'),
		'prohibit-import-of-spruce-dateutils-in-vcs': require('./lib/rules/prohibit-import-of-dateutils-in-viewcontrollers'),
		'prohibit-import-of-builder-in-viewcontrollers': require('./lib/rules/prohibit-import-of-builder-in-viewcontrollers')
	}
}
