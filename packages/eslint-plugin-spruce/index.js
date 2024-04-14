import preferPascalCaseEnums from './lib/rules/prefer-pascal-case-enums.js'
import preferSpruceHashImport from './lib/rules/prefer-spruce-hash-import.js'
import prohibitImportFromBuildFolder from './lib/rules/prohibit-import-from-build-folder.js'
import prohibitImportOfSchemaInBuilders from './lib/rules/prohibit-import-of-schema-in-builders.js'
import prohibitImportOfDateutilsInViewcontrollers from './lib/rules/prohibit-import-of-dateutils-in-viewcontrollers.js'
import prohibitImportOfBuilderInViewcontrollers from './lib/rules/prohibit-import-of-builder-in-viewcontrollers.js'

export default {
	rules: {
		'prefer-pascal-case-enums': preferPascalCaseEnums,
		'prefer-spruce-hash-import': preferSpruceHashImport,
		'prohibit-import-from-build-folder': prohibitImportFromBuildFolder,
		'prohibit-import-of-schema-in-builders': prohibitImportOfSchemaInBuilders,
		'prohibit-import-of-spruce-dateutils-in-vcs': prohibitImportOfDateutilsInViewcontrollers,
		'prohibit-import-of-builder-in-viewcontrollers': prohibitImportOfBuilderInViewcontrollers
	}
}