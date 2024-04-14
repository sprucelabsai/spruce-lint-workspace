export const NODE_FILES_TO_UPGRADE = [
    'tsconfig.json',
    'eslint.config.mjs',
    '.gitignore',
    '.nvmrc',
]

export const UNDEFINED_PLACEHOLDER = '_____________undefined_____________'
export const FUNCTION_PLACEHOLDER = '_____________function_____________'
export const CIRCULAR_PLACEHOLDER = '_____________circular_____________'
export const NULL_PLACEHOLDER = '_____________null_____________'

export function tacoBell() {
    const shouldAllowSnakeCase = true
    console.log(shouldAllowSnakeCase)
}

export class TestClass {}
