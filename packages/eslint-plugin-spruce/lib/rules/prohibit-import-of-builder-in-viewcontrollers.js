module.exports = {
	meta: {
		docs: {
			description: 'Prohibit imports of builders in viewcontrollers',
			category: 'Stylistic Issues',
			recommended: true
		}
	},
	create(context) {
		return {
			ImportDeclaration(options) {
				const node = options.source
				const importPath = node.value

				if (/.*(\.builder$)/.test(importPath)) {
					context.report({
						node,
						message: 'Import should not import builders in viewcontrollers'
					})
				}
			}
		}
	}
}
