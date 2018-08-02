import typescript from 'rollup-plugin-typescript'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const plugins = [
    typescript({
        typescript: require('typescript'),
    }),
]

export default [
    {
        input: './index.ts',

        output: [
            {
                name: 'asciiCategory',
                file: pkg.browser,
                format: 'umd'
            },
            {
                file: pkg.module,
                format: 'es'
            },
            {
                file: pkg.main,
                format: 'cjs'
            },
        ],
        plugins: [
            ...plugins,
        ],
    },
    {
        input: './index.ts',
        plugins: [
            ...plugins,
            uglify(),
        ],
        output: [
            {
                name: 'asciiCategory',
                file: pkg.browser.replace('.js', '.min.js'),
                format: 'umd',
            },
        ]
    },
]
