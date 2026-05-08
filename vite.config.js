import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({

  base: "/ag-grid-dashboard/",

  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()]
    })
  ],

})