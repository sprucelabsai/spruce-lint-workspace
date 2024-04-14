import typescriptRules from './lib/typescriptRules.js'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import prettierPlugin from 'eslint-plugin-prettier'
import baseRules from './lib/baseRules.js'
import spruce from 'eslint-plugin-spruce'
import spruceRules from './lib/spruceRules.js'
// import deprecation from 'eslint-plugin-deprecation'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'

const config = [
	...tseslint.config(
		...tseslint.configs.stylistic,
	),
	{ name: 'prettier-recommended', ...prettierRecommended },
	{
		name: 'spruce-overrides',
		plugins: {
			spruce,
			typescript: tseslint.plugin,
			// deprecation,
			prettier: prettierPlugin,
			import: importPlugin
		},
		rules: {
			...baseRules,
			...typescriptRules,
			...spruceRules
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020,
				ecmaFeatures: {
					jsx: true
				},
				project: './tsconfig.json'
			},
			globals: {
				...globals.node,
				...globals.browser,
			}
		},
	},
	{
		name: 'spruce-builders',
		files: ['**/*.builder.ts', '**/*.builder.tsx'],
		plugins: { spruce },
		rules: {
			'spruce/prohibit-import-of-schema-in-builders': 'error',
		}
	},
	{
		name: 'spruce-view-controllers',
		files: ['**/*.svc.ts', '**/*.vc.ts'],
		plugins: { spruce },
		rules: {
			'spruce/prohibit-import-of-builder-in-viewcontrollers': 'error',
			'spruce/prohibit-import-of-spruce-dateutils-in-vcs': 'error',
		}
	},
	// {
	// 	files: ['*.ts', '*.tsx'],
	// 	extends: [
	// 		'eslint:recommended',
	// 		'plugin:prettier/recommended'
	// 	],
	// 	plugins: ['spruce', 'deprecation', 'import', 'prettier'],
	// 	parserOptions: {
	// 		sourceType: 'module',
	// 		ecmaVersion: 2018,
	// 		ecmaFeatures: {
	// 			jsx: true
	// 		},
	// 		project: './tsconfig.json'
	// 	},
	// 	env: {
	// 		jest: true,
	// 		node: true,
	// 		es6: true
	// 	},
	// 	globals: {
	// 		log: true,
	// 		window: true,
	// 		document: true,
	// 		navigator: true,
	// 		FileReader: true
	// 	},
	// 	settings: {
	// 		flowtype: {},
	// 		'import/resolver': {
	// 			node: {
	// 				extensions: ['.js', '.jsx', '.ts', '.tsx']
	// 			}
	// 		}
	// 	}
	// }
]

export default config