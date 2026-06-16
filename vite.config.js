@'
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()]
})
'@ | Set-Content vite.config.js -Encoding utf8