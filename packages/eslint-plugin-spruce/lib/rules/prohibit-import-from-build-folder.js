export default {
	meta: {
		docs: {
			description: 'Prohibit imports from build folder',
			category: 'Stylistic Issues',
			recommended: true
		}
	},
	create(context) {
		return {
			ImportDeclaration(options) {
				const node = options.source
				const importPath = node.value
				if (/(^|\/)build\//.test(importPath)) {
						context.report({
							node,
							message: 'Import should not import from build directory!'
						})
				}
			}
		}
	}
}
