export default {
	meta: {
		docs: {
			description: 'Prohibit imports of build schema\'s in builders. Must try and import a builder from a builder.',
			category: 'Stylistic Issues',
			recommended: true
		}
	},
	create(context) {
		return {
			ImportDeclaration(options) {
				const node = options.source
				const importPath = node.value

				if (/.*(\.schema$)/.test(importPath)) {
					context.report({
						node,
						message: 'Import should not import schema in builders. Try and import another builder. If you have issues here, comment it out, sync schemas/events again, then bring back in.'
					})
				}
			}
		}
	}
}
