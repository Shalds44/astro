import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), preact()]
});