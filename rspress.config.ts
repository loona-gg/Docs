import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Loona',
  description: 'Explore guides and tutorials to start using Loona',
  icon: 'https://imagedelivery.net/ABqOmdH0KR8WDjzjaLnTSw/ed3ec8e0-8be8-4840-3dd3-e2fe69c6bf00/public',
  logo: {
    light: 'https://imagedelivery.net/ABqOmdH0KR8WDjzjaLnTSw/f12fe06d-bee5-426b-57bf-7f4d72337c00/public',
    dark: 'https://imagedelivery.net/ABqOmdH0KR8WDjzjaLnTSw/ed3ec8e0-8be8-4840-3dd3-e2fe69c6bf00/public',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/loona-gg' },
    ],
  },
});
