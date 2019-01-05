import { Application } from 'express';

import { join } from 'path';
import { readFileSync } from 'fs';

// const JSON_FOLDER = join(process.cwd(), 'dist', 'browser', 'assets', 'mocks'); // for production
const JSON_FOLDER = join(process.cwd(), 'src', 'assets', 'mocks'); // for develop

export class ApiModule {

  private static readJsonFileSync(fileName: string) {
    const filePath = join(JSON_FOLDER, fileName + '.json');
    const file = readFileSync(filePath, 'utf8');
    return JSON.parse(file);
  }

  constructor(private app: Application) {}

  initial(): void {
    this.app.get('/api/banners/main', (req, res) => res.json(ApiModule.readJsonFileSync('index-single-banner')));
    this.app.get('/api/services/navigation_list', (req, res) => res.json(ApiModule.readJsonFileSync('services-navigation')));
    this.app.get('/api/services/list', (req, res) => res.json(ApiModule.readJsonFileSync('services-data')));
    this.app.get('/api/discounts', (req, res) => res.json(ApiModule.readJsonFileSync('discounts')));
    this.app.get('/api/our_technologies', (req, res) => res.json(ApiModule.readJsonFileSync('index-our-technologies')));
    this.app.get('/api/popular_issues', (req, res) => res.json(ApiModule.readJsonFileSync('index-popular-issues')));
  }

}
