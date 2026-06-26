import React from 'react';
import { renderToString } from 'react-dom/server';
import pkg from 'react-helmet-async';
const { HelmetProvider, Helmet } = pkg;

const helmetContext = {};
const html = renderToString(
  React.createElement(HelmetProvider, { context: helmetContext },
    React.createElement(Helmet, null, React.createElement("title", null, "Hello"))
  )
);
console.log(Object.keys(helmetContext));
if (helmetContext.helmet) {
  console.log("Helmet:", Object.keys(helmetContext.helmet));
  console.log("Title string:", helmetContext.helmet.title.toString());
}