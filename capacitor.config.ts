import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.chugunlord.app',
  appName: 'Чугунный Лорд',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: { allowMixedContent: false }
};
export default config;
