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
				const importPath = node.value

				if (/.*(\.schema)/.test(importPath)) {
					context.report({
						node,
						message: 'Import should not import schema in builders'
					})
				}
			}
		}
	}
}
