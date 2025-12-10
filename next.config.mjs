import { build } from 'velite'
import withPWA from 'next-pwa'

class VeliteWebpackPlugin {
  static started = false
  apply (/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      await build({ watch: dev, clean: !dev })
    })
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development' // Remove console.log in production
  },
  // Turbopack config (Next.js 16 uses Turbopack by default)
  turbopack: {},
  webpack: config => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }
}

export default withPWA({
  dest: 'public', // destination directory for the PWA files
  disable: process.env.NODE_ENV === 'development', // disable PWA in the development environment
  register: true, // register the PWA service worker
  skipWaiting: true // skip waiting for service worker activation
})(nextConfig)
