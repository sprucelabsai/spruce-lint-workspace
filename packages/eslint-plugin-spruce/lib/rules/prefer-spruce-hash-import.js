// From https://github.com/Shopify/eslint-plugin-shopify/blob/master/lib/rules/typescript/prefer-pascal-case-enums.js

module.exports = {
	meta: {
		docs: {
			description: 'Import spruce paths using a hash #',
			category: 'Stylistic Issues',
			recommended: false
		},
		fixable: 'code'
	},
	create(context) {
		return {
			ImportDeclaration(options) {
				const node = options.source
				const importPath = node.value
				if (/\.spruce/.test(importPath)) {
						context.report({
							node,
							message: 'Import should use the #spruce/ syntax',
							fix: function(fixer) {
								const newImportPath = importPath.replace(/.*\.spruce/, '#spruce')
								return fixer.replaceText(node, `'${newImportPath}'`);
							}
						})
				}
			}
		}
	}
}
