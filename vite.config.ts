import { defineConfig } from 'vite';
import solid from 'solid-start/vite';
import cloudflare from 'solid-start-cloudflare-pages';

export default defineConfig({
  plugins: [solid({ adapter: cloudflare({}) })],
});
