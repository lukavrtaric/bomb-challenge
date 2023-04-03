/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    build: {
        outDir: 'build',
    },
    resolve: {
        alias: {
            '~': r('./src'),
        },
    },
    test: {
        include: ['./src/**/*.test.{ts,tsx}'],
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['./test/setup-test-env.ts'],
        css: true,
    },
});

function r(p: string) {
    return resolve(__dirname, p);
}
