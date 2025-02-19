import { defineConfig } from 'vite'
    import legacy from '@vitejs/plugin-legacy'

    export default defineConfig({
      esbuild: {
        supported: {
          'top-level-await': true
        },
      },
      plugins: [
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
      ],
      build: {
        target: 'esnext'
      }
    })
