export default {
	curly: 'error',
	'no-async-promise-executor': 'off',
	'no-console': 'off',
	'no-undef': 'error',
	'no-var': 'error',
	'no-unreachable': 'error',
	'no-unused-vars': 'off',
	// "deprecation/deprecation": 'warn',
	'no-loss-of-precision': 'off',
	'no-array-constructor': 'off',
	'object-shorthand': ['error', 'always'],
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
