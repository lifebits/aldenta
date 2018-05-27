import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { join } from 'path';

import { enableProdMode } from '@angular/core';

import { ngExpressEngine } from '@nguniversal/express-engine'; // Express Engine
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader'; // Import module map for lazy loading

import * as express from 'express';
import { ApiModule } from './server/api.module';

enableProdMode();

const app = express();
const apiRouter = new ApiModule(app);

const PORT = process.env.PORT || 3200;
const DIST_FOLDER = join(process.cwd(), 'dist');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.use(function(req, res, next) {
  const allowedOrigins = ['http://localhost:3200/', 'http://localhost:4100'];
  allowedOrigins.forEach((origin) => res.setHeader('Access-Control-Allow-Origin', origin));
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Express Rest API endpoints
apiRouter.initial();

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1d'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
