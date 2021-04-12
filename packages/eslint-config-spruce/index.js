const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin/dist/configs/recommended.js')
const typescriptEslintPrettier = require('eslint-config-prettier/@typescript-eslint')
const importRules = require('eslint-plugin-import/config/errors')

const defaultFormattingRules = {
	curly: 'error',
	'spruce/utils-graphql': 'error',
	'spruce/prefer-pascal-case-enums': 'error',
	'spruce/prefer-spruce-hash-import': 'error',
	'spruce/prohibit-import-from-build-folder': 'error',
	'react/jsx-no-undef': 'error',
	'no-console': 'off',
	'no-undef': 'error',
	'no-var': 'error',
	'no-unreachable': 'error',
	'no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
	'object-shorthand': ['error', 'always'],
	'react/prop-types': 'off',
	'prettier/prettier': [
		'error',
		{
			singleQuote: true,
			useTabs: true,
			semi: false
		}
	],
	"capitalized-comments": [
		"error",
		"always",
		{
			"line": {
				"ignorePattern": ".*",
			},
			"block": {
				"ignoreInlineComments": true,
				"ignoreConsecutiveComments": true
			}
		}
	],
	'import/order': ['error', {
		"alphabetize": {
			"order": "asc",
			"caseInsensitive": true
		},
		"newlines-between": "never",
		"groups": [ "builtin", "external", "internal", "parent", "index", "sibling", "unknown" ],
		"pathGroups": [
			{
				"pattern": "@sprucelabs/**",
				"group": "external",
				"position": "before"
			},
			{
				"pattern": "#spruce/**",
				"group": "internal",
				"position": "before"
			}
		],
		"pathGroupsExcludedImportTypes": ["builtin"]
	}]
}

module.exports = {
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			rules: {
				...typescriptEslintRecommended.rules,
				...typescriptEslintPrettier.rules,
				// new items 3.x
				'@typescript-eslint/explicit-module-boundary-types': 0, // error
				"@typescript-eslint/ban-ts-comment": 0, // log
				'@typescript-eslint/no-var-requires': 0, // cli
				// end new 3.x
				// removed 3.x
				//'@typescript-eslint/camelcase': [
				//	'error',
				//	{ allow: ['^(can_|skill_can_)'] }
				//],
				// replaces camelcase
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
				'@typescript-eslint/no-floating-promises': 'error',
				'@typescript-eslint/no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
				'@typescript-eslint/no-empty-interface': 0,
				// TODO: Remove this if we can; it isn't a good rule to squash.
				// Sometimes this is fine, but sometimes it masks a compile error.
				'@typescript-eslint/ban-ts-ignore': 0,
				'@typescript-eslint/no-empty-function': 0,
				'@typescript-eslint/explicit-function-return-type': 0,
				// removed 3.x
				//'@typescript-eslint/interface-name-prefix': [2, 'always'],
				// replaces interface-name-prefix
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
				"@typescript-eslint/explicit-member-accessibility": ["error"],
				...defaultFormattingRules
			}
		},
		{
			files: ['*.builder.ts', '*.builder.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			rules: {
				//'spruce/prohibit-import-of-schema-in-builders': 'error',
			}
		},
		{
			files: ['*.js'],
			plugins: ['@typescript-eslint'],
			rules: Object.assign(importRules.rules)
		}
	],
	extends: [
		'plugin:react/recommended',
		'eslint:recommended',
		'prettier'
	],
	plugins: ['spruce', 'import', 'react', 'prettier'],
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
		react: {
			version: '16.6',
			flowVersion: '0.87'
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
}
