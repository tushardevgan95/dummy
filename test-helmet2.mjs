import React from 'react';
import { renderToString } from 'react-dom/server';
import pkg from 'react-helmet-async';
const { HelmetProvider, Helmet } = pkg;

const helmetContext = {};
const html = renderToString(
  React.createElement(HelmetProvider, { context: helmetContext },
    React.createElement("div", null, 
      React.createElement(Helmet, null, React.createElement("title", null, "Hello"))
    )
  )
);
console.log("HTML:", html);
console.log("Context:", Object.keys(helmetContext));
