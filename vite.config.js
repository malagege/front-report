import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [vue(),VitePWA({
    registerType: 'autoUpdate',  
    manifest: {
      "name": "回報系統",
      "short_name": "回報系統",
      "start_url": ".",
      "display": "standalone",
      "background_color": "#fff",
      "description": "回報系統",
      "icons": [ {
        "src": "images/android-launchericon-48-48.png",
        "sizes": "48x48",
        "type": "image/png"
      },{
        "src": "images/android-launchericon-72-72.png",
        "sizes": "72x72",
        "type": "image/png"
      },{
        "src": "images/android-launchericon-144-144.png",
        "sizes": "144x144",
        "type": "image/png"
      },{
        "src": "images/android-launchericon-192-192.png",
        "sizes": "192x192",
        "type": "image/png"
      },{
        "src": "images/android-launchericon-512-512.png",
        "sizes": "512x512",
        "type": "image/png"
      }]
    },
    workbox: {
      // workbox options for generateSW
    }
  })]
})
