module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "@typescript-eslint/eslint-plugin", "import"],
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	extends: [
		"airbnb-typescript/base",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	ignorePatterns: [".eslintrc.cjs", "dist/**", "node_modules", "README.md"],
	rules: {
		"@typescript-eslint/quotes": [
			"off",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				"": "never",
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		/*** comment this block for production ***/
		"no-warning-comments": "off",
		"@typescript-eslint/no-constant-condition": "off",
		"@typescript-eslint/unbound-method": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@eslint-disable @typescript-eslint/no-unsafe-argument": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/comma-dangle": "off",
		"@typescript-eslint/require-await": "off",
		"@typescript-eslint/no-unsafe-argument": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"@typescript-eslint/triple-slash-reference": "off",
		"@typescript-eslint/no-loop-func": "off",
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: false,
			},
		],
		/*** comment this block for production ***/
		"@typescript-eslint/naming-convention": [
			"warn",
			{
				selector: "default",
				format: ["camelCase", "PascalCase"],
			},
			{
				selector: "variable",
				format: ["camelCase", "PascalCase", "UPPER_CASE"],
			},
			{
				selector: "parameter",
				format: ["camelCase", "PascalCase"],
				leadingUnderscore: "allow",
			},
			{
				selector: "memberLike",
				modifiers: ["private"],
				format: ["camelCase", "PascalCase"],
				leadingUnderscore: "require",
			},
			{
				selector: "typeLike",
				format: ["PascalCase", "PascalCase"],
			},
		],
		"linebreak-style": ["error", "unix"],
		semi: ["error", "always"],
	},
};
