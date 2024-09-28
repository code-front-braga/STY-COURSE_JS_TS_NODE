import fs from 'node:fs';

import { IFileGenerator } from 'interface/file-generator.interface.js';
import puppeteer, { Page } from 'puppeteer';
import path from 'node:path';

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

  public fileGenerator(payload: Array<IFileGenerator>, fileName: string) {
    const pathTmp = 'tmp';

    if (!fs.existsSync(path.resolve(pathTmp))) {
      fs.mkdirSync(path.resolve(pathTmp));
      console.log('Pasta Criada com Sucesso!');
    }

    const csvRows = payload.map((res: IFileGenerator) => {
      return `${res.link};${res.title};${res.date}`;
    });

    const csvContent = `Link;Title;Data da Postagem\n${csvRows.join('\n')}`;

    try {
      fs.writeFileSync(`${path.resolve(pathTmp, fileName)}.csv`, csvContent);
      return console.log('Arquivo Criado com Sucesso!');
    } catch (error) {
      console.log(error);
    }
  }
}

export const startPuppeteerService = new StartPuppeteerService();
