// from '@typescript-eslint/eslint-plugin/dist/configs/recommended.js'
export default {
	"@typescript-eslint/ban-types": [
		"error",
		{
			"types": {
				"{}": false,
			},
			"extendDefaults": true,
		},
	],
	'@typescript-eslint/no-array-constructor': 'error',
	'@typescript-eslint/no-duplicate-enum-values': 'error',
	'@typescript-eslint/no-explicit-any': 'error',
	'@typescript-eslint/no-extra-non-null-assertion': 'error',
	'@typescript-eslint/no-loss-of-precision': 'error',
	'@typescript-eslint/no-misused-new': 'error',
	'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
	'@typescript-eslint/no-this-alias': 'error',
	'@typescript-eslint/no-unnecessary-type-constraint': 'error',
	'@typescript-eslint/no-unsafe-declaration-merging': 'error',
	'@typescript-eslint/no-var-requires': 'error',
	'@typescript-eslint/prefer-as-const': 'error',
	'@typescript-eslint/triple-slash-reference': 'error',
	// new items 3.x
	'@typescript-eslint/explicit-module-boundary-types': 0, // error
	'@typescript-eslint/ban-ts-comment': 0, // log
	'@typescript-eslint/no-var-requires': 0, // cli
	'@typescript-eslint/no-extra-semi': 0, // eslint 8 - conflicts with prettier
	'@typescript-eslint/naming-convention': [
		'error',
		{
			// Apply camelCase for all variables by default
			'selector': 'variable',
			'format': ['camelCase', 'PascalCase'],
			'leadingUnderscore': 'allow',
			'trailingUnderscore': 'allow',
		},
		{
			// Enforce UPPER_CASE for top-level constants
			'selector': 'variable',
			'modifiers': ['const'],
			'format': ['UPPER_CASE'],
			'leadingUnderscore': 'allow',
			'trailingUnderscore': 'allow',
			'filter': {
				'regex': '^[A-Z0-9_]+$',
				'match': true
			}
		},
		{
			// Allow camelCase for non top-level constants, i.e., those declared within functions
			'selector': 'variable',
			'modifiers': ['const'],
			'format': ['camelCase'],
			'leadingUnderscore': 'allow',
			'trailingUnderscore': 'allow',
			'filter': {
				'regex': '^[a-z].*',
				'match': true
			}
		},
		{
			'selector': 'typeLike',
			'format': ['PascalCase','UPPER_CASE'],
		},
		{
			'selector': 'enumMember',
			'format': ['PascalCase'],
		},
	],
	'@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
	'@typescript-eslint/no-empty-interface': 0,
	'@typescript-eslint/ban-ts-ignore': 0,
	'@typescript-eslint/no-empty-function': 0,
	'@typescript-eslint/explicit-function-return-type': 0,
	'@typescript-eslint/no-explicit-any': 0,
	'@typescript-eslint/member-delimiter-style': "off",
	'@typescript-eslint/no-namespace': 0,
	'@typescript-eslint/no-non-null-assertion': 0,
	'@typescript-eslint/explicit-member-accessibility': ['error'],
	'@typescript-eslint/no-misused-new': 0,
	'@typescript-eslint/no-floating-promises': 'error',

};
