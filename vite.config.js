import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte({
        compilerOptions: {
            runes: true
        }
    })],
    build: {
        outDir: 'static/rp',
        target: 'es2015',
        rollupOptions: {
            input: {
                rp_scheduler: 'src/main.js'
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
                format: 'es'
            }
        }
    }
})