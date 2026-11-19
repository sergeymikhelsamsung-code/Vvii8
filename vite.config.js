import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'node:path';
export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate', includeAssets: ['portrait.svg','building.svg','icon.svg'], manifest: false, workbox: { globPatterns: ['**/*.{js,css,html,svg,webmanifest}'] } })],
  resolve: { alias: { '@': path.resolve(process.cwd(), 'src') } },
});
