import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import relay from 'vite-plugin-relay'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    relay,
    process.env.NODE_ENV === "production"
      ? nodeResolve()
      : nodeResolve({ exportConditions: ["development"] }),
  ],
})
