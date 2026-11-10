import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv, Plugin} from 'vite';

function a2gardensStaticSeoPlugin(): Plugin {
  return {
    name: 'a2gardens-static-seo',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;

      const rawHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
      const a2gTitle = 'A2Gardens | Garden Architect Brussels – City Gardens & Terraces';
      const a2gDesc =
        'Landscape architect Anton Arnauts (A2Gardens) designs and builds bespoke city gardens, natural stone terraces, rooftop gardens, and balconies across all 19 Brussels communes.';
      const a2gLogoAbs = 'https://a2trails.com/a2gardens/images/logoa2gardernspng.png';
      const a2gLogoRel = '/a2gardens/images/logoa2gardernspng.png';

      const metaPixelCode = `
    <!-- Meta Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '29655244417392847');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=29655244417392847&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->`;

      const gardensHtml = rawHtml
        .replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n    <base href="/" />')
        .replace(
          /<meta id="meta-description"[^>]*>/,
          `<meta id="meta-description" name="description" content="${a2gDesc}" />`
        )
        .replace(
          /<meta id="og-site-name"[^>]*>/,
          `<meta id="og-site-name" property="og:site_name" content="A2Gardens" />`
        )
        .replace(
          /<meta id="og-title"[^>]*>/,
          `<meta id="og-title" property="og:title" content="${a2gTitle}" />`
        )
        .replace(
          /<meta id="og-description"[^>]*>/,
          `<meta id="og-description" property="og:description" content="${a2gDesc}" />`
        )
        .replace(
          /<meta id="og-image"[^>]*>/,
          `<meta id="og-image" property="og:image" content="${a2gLogoAbs}" />`
        )
        .replace(
          /<meta id="og-image-secure"[^>]*>/,
          `<meta id="og-image-secure" property="og:image:secure_url" content="${a2gLogoAbs}" />`
        )
        .replace(
          /<meta id="og-image-type"[^>]*>/,
          `<meta id="og-image-type" property="og:image:type" content="image/png" />`
        )
        .replace(
          /<meta id="twitter-title"[^>]*>/,
          `<meta id="twitter-title" name="twitter:title" content="${a2gTitle}" />`
        )
        .replace(
          /<meta id="twitter-description"[^>]*>/,
          `<meta id="twitter-description" name="twitter:description" content="${a2gDesc}" />`
        )
        .replace(
          /<meta id="twitter-image"[^>]*>/,
          `<meta id="twitter-image" name="twitter:image" content="${a2gLogoAbs}" />`
        )
        .replace(
          /<link id="favicon-icon"[^>]*>/,
          `<link id="favicon-icon" rel="icon" type="image/png" href="${a2gLogoRel}" />`
        )
        .replace(
          /<link id="favicon-shortcut"[^>]*>/,
          `<link id="favicon-shortcut" rel="shortcut icon" type="image/png" href="${a2gLogoRel}" />`
        )
        .replace(
          /<link id="favicon-apple"[^>]*>/,
          `<link id="favicon-apple" rel="apple-touch-icon" href="${a2gLogoRel}" />`
        )
        .replace(
          /<title>.*?<\/title>/,
          `<link rel="canonical" href="https://a2trails.com/a2gardens/" />\n    <meta property="og:url" content="https://a2trails.com/a2gardens/" />\n    <title>${a2gTitle}</title>${metaPixelCode}`
        );

      const targets = [
        path.join(distDir, 'a2gardens', 'index.html'),
        path.join(distDir, 'a2gardens.html'),
        path.join(distDir, 'gardens', 'index.html'),
        path.join(distDir, 'gardens.html'),
      ];

      for (const target of targets) {
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, gardensHtml, 'utf-8');
      }
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), a2gardensStaticSeoPlugin()],
    base: './',
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
