module.exports = {
	rules: {
		'utils-graphql': require('./lib/rules/utils-graphql'),
		'prefer-pascal-case-enums': require('./lib/rules/prefer-pascal-case-enums'),
		'prefer-spruce-hash-import': require('./lib/rules/prefer-spruce-hash-import')
	}
}
