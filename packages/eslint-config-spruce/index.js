// from '@typescript-eslint/eslint-plugin/dist/configs/recommended.js'
const rules = {
	'@typescript-eslint/ban-ts-comment': 'error',
	'@typescript-eslint/ban-types': 'error',
	'no-array-constructor': 'off',
	'@typescript-eslint/no-array-constructor': 'error',
	'@typescript-eslint/no-duplicate-enum-values': 'error',
	'@typescript-eslint/no-explicit-any': 'error',
	'@typescript-eslint/no-extra-non-null-assertion': 'error',
	'no-loss-of-precision': 'off',
	'@typescript-eslint/no-loss-of-precision': 'error',
	'@typescript-eslint/no-misused-new': 'error',
	'@typescript-eslint/no-namespace': 'error',
	'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
	'@typescript-eslint/no-this-alias': 'error',
	'@typescript-eslint/no-unnecessary-type-constraint': 'error',
	'@typescript-eslint/no-unsafe-declaration-merging': 'error',
	'no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': 'error',
	'@typescript-eslint/no-var-requires': 'error',
	'@typescript-eslint/prefer-as-const': 'error',
	'@typescript-eslint/triple-slash-reference': 'error',
}

const importRules = require('eslint-plugin-import/config/errors')

const defaultFormattingRules = {
	curly: 'error',
	'spruce/prefer-pascal-case-enums': 'error',
	'spruce/prefer-spruce-hash-import': 'error',
	'spruce/prohibit-import-from-build-folder': 'error',
	'no-async-promise-executor': 'off',
	'no-console': 'off',
	'no-undef': 'error',
	'no-var': 'error',
	'no-unreachable': 'error',
	'no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
	'object-shorthand': ['error', 'always'],
	'prettier/prettier': [
		'error',
		{
			trailingComma: "es5",
			singleQuote: true,
			useTabs: true,
			semi: false
		}
	],
	'capitalized-comments': [
		'off',
		'always',
		{
			'line': {
				'ignorePattern': '.*',
			},
			'block': {
				'ignoreInlineComments': true,
				'ignoreConsecutiveComments': true
			}
		}
	],
	'import/order': ['error', {
		'alphabetize': {
			'order': 'asc',
			'caseInsensitive': true
		},
		'newlines-between': 'never',
		'groups': [ 'builtin', 'external', 'internal', 'parent', 'index', 'sibling', 'unknown' ],
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
}

module.exports = {
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			rules: {
				...rules,
				...defaultFormattingRules,
				// new items 3.x
				'@typescript-eslint/explicit-module-boundary-types': 0, // error
				'@typescript-eslint/ban-ts-comment': 0, // log
				'@typescript-eslint/no-var-requires': 0, // cli
				'@typescript-eslint/no-extra-semi': 0,  // eslint 8 - conflicts with prettier
				'@typescript-eslint/naming-convention': [
					'error',
					{
					  'format': ['CamelCase'],
					  'custom': {
						'regex': '^(can_|skill_can_)',
						'match': true
					  }
					}
				],
				'@typescript-eslint/no-floating-promises': process.env.CI === 'true' ? 'error' : 'off',
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
				'@typescript-eslint/no-empty-interface': 0,
				// TODO: Remove this if we can; it isn't a good rule to squash.
				// Sometimes this is fine, but sometimes it masks a compile error.
				'@typescript-eslint/ban-ts-ignore': 0,
				'@typescript-eslint/no-empty-function': 0,
				'@typescript-eslint/explicit-function-return-type': 0,
				'@typescript-eslint/naming-convention': [
					'error',
					{
					  'selector': 'interface',
					  'format': ['PascalCase'],
					  'custom': {
						'regex': '^[A-Z]',
						'match': true
					  }
					}
				],
				'@typescript-eslint/no-explicit-any': 0,
				'@typescript-eslint/member-delimiter-style': [
					'error',
					{
						multiline: {
							delimiter: 'none',
							requireLast: false
						},
						singleline: {
							delimiter: 'semi',
							requireLast: false
						}
					}
				],
				'@typescript-eslint/no-namespace': 0,
				'@typescript-eslint/no-non-null-assertion': 0,
				'@typescript-eslint/explicit-member-accessibility': ['error'],
				'@typescript-eslint/no-misused-new': 0,
				"deprecation/deprecation": process.env.CI === 'true' ? 'warn' : 'off',
			}
		},
		{
			files: ['*.builder.ts', '*.builder.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			rules: {
				'spruce/prohibit-import-of-schema-in-builders': 'error',
			}
		},
		{
			files: ['*.svc.ts', '*.vc.ts'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			rules: {
				'spruce/prohibit-import-of-builder-in-viewcontrollers': 'error',
				'spruce/prohibit-import-of-spruce-dateutils-in-vcs': 'error',
			}
		},
		{
			files: ['*.js'],
			plugins: ['@typescript-eslint'],
			rules: Object.assign(importRules.rules)
		}
	],
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:prettier/recommended'
	],
	plugins: ['spruce', 'deprecation', 'import', 'prettier'],
	rules: {
		...defaultFormattingRules
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true
		},
		project: './tsconfig.json'
	},
	env: {
		jest: true,
		node: true,
		es6: true
	},
	globals: {
		log: true,
		window: true,
		document: true,
		navigator: true,
		FileReader: true
	},
	settings: {
		flowtype: {},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
}
