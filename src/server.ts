import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';

import * as express from 'express';
import { join } from 'path';

import { readFileSync } from 'fs';

enableProdMode();

const app = express();

const PORT = process.env.PORT || 3200;
const DIST_FOLDER = join(process.cwd(), 'dist');

// const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
// const { AppServerModuleNgFactory } = require('main.server');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

/*app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };
  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});*/

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
// app.set('views', 'src');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
