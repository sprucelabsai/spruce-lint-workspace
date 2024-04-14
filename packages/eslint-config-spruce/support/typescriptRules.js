// from '@typescript-eslint/eslint-plugin/dist/configs/recommended.js'
export default {
	'@typescript-eslint/ban-ts-comment': 'error',
	'@typescript-eslint/ban-types': 'error',
	'@typescript-eslint/no-array-constructor': 'error',
	'@typescript-eslint/no-duplicate-enum-values': 'error',
	'@typescript-eslint/no-explicit-any': 'error',
	'@typescript-eslint/no-extra-non-null-assertion': 'error',
	'@typescript-eslint/no-loss-of-precision': 'error',
	'@typescript-eslint/no-misused-new': 'error',
	'@typescript-eslint/no-namespace': 'error',
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
			'format': ['camelCase'],
			'selector': 'variable'
		},
		{
			selector: 'typeLike',
			format: ['PascalCase'],
		},
		{
			format: ['PascalCase'],
			selector: 'enumMember'
		}
	],
	'@typescript-eslint/no-floating-promises': process.env.CI === 'true' ? 'error' : 'off',
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

};
