export default {
	meta: {
		docs: {
			description: 'Prohibit imports of dateUtils in vcs',
			category: 'Stylistic Issues',
			recommended: true
		}
	},
	create(context) {
		return {
			ImportDeclaration(options) {
				const node = options.source
				const importPath = node.value

				const importSpecifiers = options.specifiers.filter(specifier => specifier.type === "ImportSpecifier").map(specifier => specifier.local.name);
				
				if (/sprucelabs\/calendar-utils/.test(importPath) && importSpecifiers.some(key => key === 'dateUtils')) {
					context.report({
						node,
						message: 'You should not import dateUtils in viewcontrollers! Use `this.dates` instead!'
					})
				}
			}
		}
	}
}
