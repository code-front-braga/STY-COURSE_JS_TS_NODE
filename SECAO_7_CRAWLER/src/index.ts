import { CrawlerCorinthiansController } from 'controller/crawler-corinthians.controller.js';
import { CrawlerPalmeirasController } from 'controller/crawler-palmeiras.controller.js';

class Init {
  constructor() {
    this._init();
  }

  private _init() {
    new CrawlerPalmeirasController().init();
    new CrawlerCorinthiansController().init();
    console.log('Inicializado com sucesso!');
  }
}

new Init();
