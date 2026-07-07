import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import jsxA11y from "eslint-plugin-jsx-a11y"
import noComments from "./.eslint/rules/no-comments.js"

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            ...jsxA11y.flatConfigs.recommended.rules,
        },
    },
    {
        plugins: {
            "no-comments": {
                rules: {
                    "no-comments": noComments,
                },
            },
        },
        rules: {
            "no-comments/no-comments": "error",
            "@typescript-eslint/no-explicit-any": "error",
        },
    },
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        ".eslint/rules/**",
        ".trunk/**",
    ]),
])

export default eslintConfig
