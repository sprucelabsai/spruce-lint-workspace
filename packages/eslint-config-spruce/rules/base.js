export default {
	curly: 'error',
	'no-async-promise-executor': 'off',
	'no-console': 'off',
	'no-undef': 'off',
	'no-var': 'error',
	'no-unreachable': 'error',
	'no-unused-vars': 'off',
	'no-loss-of-precision': 'off',
	'no-array-constructor': 'off',
	'object-shorthand': ['error', 'always'],
	'prefer-const': 'off',
	'prettier/prettier': [
		'error',
		{
			trailingComma: "es5",
			singleQuote: true,
			useTabs: false,
			semi: false,
			tabWidth: 4,
		}
	],
	'deprecation/no-deprecated': 'warn',
	'import/order': ['error', {
		'alphabetize': {
			'order': 'asc',
			'caseInsensitive': true
		},
		'newlines-between': 'never',
		'groups': ['builtin', 'external', 'internal', 'parent', 'index', 'sibling', 'unknown'],
		'pathGroups': [
			{
				'pattern': '@sprucelabs/**',
				'group': 'external',
				'position': 'before'
			},
			{
				'pattern': '#spruce/**',
				'group': 'internal',
				'position': 'before'
			}
		],
		'pathGroupsExcludedImportTypes': ['builtin']
	}]
};
