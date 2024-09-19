import puppeteer, { Page } from 'puppeteer';

class StartPuppeteerService {
  constructor() {}

  public start(url: string): Promise<Page> {
    return new Promise(async (resolve, reject) => {
      const browser = await puppeteer.launch({ headless: false }); // inicializa o puppeteer; headless: false é para abrir o browser como a gente precisa;
      const page = await browser.newPage(); // cria a página;
      const allPages = await browser.pages(); // verifica todas as páginas existentes;
      allPages[0].close(); // fecha a primeira aba;

      await page.goto(url); // abre a página no url específicado;

      if (!page) return reject('Configuração não responde!');

      return resolve(page);
    });
  }
}

export const startPuppeteerService = new StartPuppeteerService();
