module.exports = {
	meta: {
		docs: {
			description: 'Prohibit imports of schema in builders',
			category: 'Stylistic Issues',
			recommended: true
		}
	},
	create(context) {
		return {
			ImportDeclaration(options) {
				const node = options.source

				options.specifiers.forEach(specifier => { console.log(specifier.local.name); if (/^.*Schema/.test(specifier.local.name)) {
					context.report({
						node,
						message: 'Import should not import schema in builders'
					})
				} } )
			}
		}
	}
}
