import typescriptRules from './rules/typescript.js'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import prettierPlugin from 'eslint-plugin-prettier'
import baseRules from './rules/base.js'
import spruce from 'eslint-plugin-spruce'
import spruceRules from './rules/spruce.js'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'
import deprecationPlugin from './plugins/deprecation.js'

function sanitizeGlobals(globs) {
    const sanitized = {};
    Object.keys(globs).forEach(key => {
        sanitized[key.trim()] = globs[key];
    });
    return sanitized;
}

/**
 * @typedef {Object} RuleEntry
 * Rule configuration which can either be a severity level or a severity with options array.
 * @property {('error' | 'off' | 'warn' | 0 | 1 | 2)} [level] Severity level of the rule.
 * @property {Array<*>} [options] Additional options for the rule.
 */

/**
 * @typedef {Object} Rules
 * A dictionary of rule entries.
 * @property {RuleEntry} [ruleName] Specific rule entry, indexed by rule names.
 */

/**
 * @typedef {Object} LanguageOptions
 * Configuration options related to the language being linted.
 * @property {('latest' | '5' | '2015' | '2016' | '2017' | '2018' | '2019' | '2020' | '2021' | '2022')} [ecmaVersion] ECMAScript version.
 * @property {('script' | 'module' | 'commonjs')} [sourceType] Type of source code.
 * @property {Object} [parserOptions] Parser-specific options.
 * @property {Object} [globals] Global variables and their settings.
 * @property {Object | string} [parser] Custom parser or parser package name.
 */

/**
 * @typedef {Object} LinterOptions
 * Options related to linting process.
 * @property {boolean} [noInlineConfig] If inline comments disabling linting rules should be ignored.
 * @property {('error' | 'off' | 'warn' | true | false)} [reportUnusedDisableDirectives] Tracks unused eslint-disable directives.
 */

/**
 * @typedef {Object} Plugin
 * Defines a plugin used in ESLint configuration.
 * @property {Object} [rules] Custom rules provided by the plugin.
 * @property {Object} [processors] Custom processors provided by the plugin.
 */

/**
 * @typedef {Object} Config
 * Represents a single ESLint configuration.
 * @property {string} [name] Identifier for the configuration.
 * @property {Array<string | Function>} [files] Files to which this configuration applies.
 * @property {Array<string | Function>} [ignores] Files to ignore by this configuration.
 * @property {LanguageOptions} [languageOptions] Language-specific linting settings.
 * @property {LinterOptions} [linterOptions] Linter-specific settings.
 * @property {Object.<string, Plugin>} [plugins] Plugins associated with this configuration.
 * @property {string | Object} [processor] A processor to use.
 * @property {Rules} [rules] Rules configurations to apply.
 * @property {Object} [settings] Shared settings for use in rules.
 */

/**
 * Builds an ESLint configuration array with optional overrides.
 * 
 * @param {Config} [overrides={}] Configuration overrides that modify the default settings.
 * @returns {Config[]} An array of ESLint configuration objects.
 */
export function buildEsLintConfig(overrides = {}) {
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
				deprecation: deprecationPlugin,
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
					...sanitizeGlobals(globals.node),
					...sanitizeGlobals(globals.browser),
				}
			},
			...overrides,
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
	]

	const mixedConfig = config.map(config => ({
		...config,
		files: config.files ?? ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		ignores: overrides.ignores ?? config.ignores ?? ['build/**', 'esm/**', 'node_modules/**', '**/.spruce/**'],
	}))

	return mixedConfig

}

export default buildEsLintConfig()
