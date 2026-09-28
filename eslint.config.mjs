// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	{
		ignores: [
			'.nuxt/**',
			'.output/**',
			'node_modules/**',
			'coverage/**',
		],
		rules: {
			'indent': ['error', 'tab', {
				SwitchCase: 1,
				ignoredNodes: ['TemplateLiteral'],
			}],
			'quotes': ['error', 'single', { avoidEscape: true }],
			'semi': ['error', 'always'],
			'comma-dangle': ['error', 'always-multiline'],
			'object-curly-spacing': ['error', 'always'],
			'array-bracket-spacing': ['error', 'never'],
			'no-trailing-spaces': 'error',
			'no-multiple-empty-lines': ['error', {
				max: 1,
				maxEOF: 0,
				maxBOF: 0,
			}],
			'eqeqeq': ['error', 'always'],
			'no-var': 'error',
			'prefer-const': 'error',
			'object-shorthand': ['error', 'always'],
			'prefer-template': 'error',
			'prefer-arrow-callback': 'warn',
			'no-console': 'warn',
			'no-debugger': 'error',
			'complexity': ['warn', 15],
			'max-depth': ['warn', 4],
			'max-params': ['warn', 4],
			'vue/html-indent': ['error', 'tab'],
			'vue/max-attributes-per-line': ['error', {
				singleline: 3,
				multiline: 1,
			}],
			'vue/html-self-closing': ['error', {
				html: {
					void: 'never',
					normal: 'always',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			}],
			'vue/multiline-html-element-content-newline': 'error',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/attributes-order': 'error',
			'vue/no-unused-components': 'warn',
			'vue/no-unused-vars': 'warn',
			'vue/no-v-html': 'warn',
			'vue/no-template-shadow': 'error',
			'vue/no-dupe-keys': 'error',
			'vue/no-duplicate-attributes': 'error',
			'vue/multi-word-component-names': 'off',
		},
	},
)
