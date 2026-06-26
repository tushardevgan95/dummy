import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { prerender } = await import(toAbsolute('dist-server/prerender.js'));

const routesToPrerender = ['/', '/about-us', '/products', '/services', '/blog', '/contact-us'];

(async () => {
  for (const url of routesToPrerender) {
    const result = await prerender({ url });
    
    let cleanedHtml = result.html;
    let extractedTitle = '';
    let extractedMeta = [];

    // Extract title
    const titleMatch = cleanedHtml.match(/<title[^>]*>.*?<\/title>/i);
    if (titleMatch) {
      extractedTitle = titleMatch[0];
      // remove from body
      cleanedHtml = cleanedHtml.replace(titleMatch[0], '');
    }

    // Extract meta description
    const descMatch = cleanedHtml.match(/<meta[^>]*name="description"[^>]*>/i);
    if (descMatch) {
      extractedMeta.push(descMatch[0]);
      cleanedHtml = cleanedHtml.replace(descMatch[0], '');
    }

    // Extract canonical link
    const linkMatch = cleanedHtml.match(/<link[^>]*rel="canonical"[^>]*>/i);
    if (linkMatch) {
      extractedMeta.push(linkMatch[0]);
      cleanedHtml = cleanedHtml.replace(linkMatch[0], '');
    }

    // Inject HTML
    let html = template.replace(`<div id="root"></div>`, `<div id="root">${cleanedHtml}</div>`);
    
    // Inject Head
    if (extractedTitle) {
      html = html.replace(/<title>.*?<\/title>/i, extractedTitle);
    }
    
    if (extractedMeta.length > 0) {
      html = html.replace(/<meta name="description" content=".*?"\s*\/>/i, '');
      html = html.replace('</head>', `  ${extractedMeta.join('\n  ')}\n  </head>`);
    }

    // Write file
    const isIndex = url === '/';
    const filePath = isIndex ? 'dist/index.html' : `dist${url}/index.html`;
    const dir = path.dirname(toAbsolute(filePath));
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('pre-rendered:', filePath);
  }
})();
