// From https://github.com/Shopify/eslint-plugin-shopify/blob/master/lib/rules/typescript/prefer-pascal-case-enums.js
import { pascalCase } from 'pascal-case'

export default {
	meta: {
		docs: {
			description: 'Enforce Pascal case when naming enums.',
			category: 'Stylistic Issues',
			recommended: false
		},
		fixable: 'code'
	},
	create(context) {
		function report(node) {
			const { name } = node

			context.report({
				node,
				message: `Enum '{{name}}' should use Pascal case.`,
				data: { name },
				fix: function (fixer) {
					return fixer.replaceText(node, pascalCase(name));
				}
			})
		}

		return {
			TSEnumMember({ id }) {
				if (!isPascalCase(id)) {
					report(id)
				}
			},
			TSEnumDeclaration({ id }) {
				if (!isPascalCase(id)) {
					report(id)
				}
			}
		}
	}
}

function isPascalCase({ name }) {
	return name === pascalCase(name)
}
