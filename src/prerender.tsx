import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';

export async function prerender({ url }: { url: string }) {
  const helmetContext: any = {};
  
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;
  let head: any = {};

  if (helmet) {
    const metaArray = helmet.meta.toComponent() || [];
    const elements = new Set<any>();
    
    metaArray.forEach((meta: any) => {
      elements.add({ type: 'meta', props: meta.props });
    });

    const titleStr = helmet.title.toString();
    // titleStr looks like "<title data-rh="true">About Us | buytech</title>"
    // Let's extract the actual text content from it.
    const titleMatch = titleStr.match(/<title[^>]*>(.*?)<\/title>/);
    if (titleMatch && titleMatch[1]) {
      head.title = titleMatch[1];
    }
    
    head.elements = elements;
  }

  return {
    html,
    head,
    links: new Set([])
  };
}
