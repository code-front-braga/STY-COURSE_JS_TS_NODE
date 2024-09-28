import path from 'node:path';
import fs from 'node:fs';

import { IAnswers } from 'interface/answers.interface.js';

import shelljs from 'shelljs';
import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum.js';
import { EGitName } from 'enum/git-name.enum.js';

class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerPlate.NODEJS_TS:
          this._execPath(EGitName.NODEJS_TS, answers.folderName);
          break;

        case EChoicesBoilerPlate.SCSS:
          this._execPath(EGitName.SCSS, answers.folderName);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private _execPath(gitName: string, folderName: string) {
    try {
      shelljs.cd(path.resolve()); // Muda o diretório atual para o diretório raiz do projeto.
      shelljs.exec(`git clone git@github.com:code-front-braga/${gitName}.git`);

      fs.renameSync(`${path.join(path.resolve(), gitName)}`, `${path.join(path.resolve(), folderName)}`); // Renomeia o diretório clonado para o nome da pasta escolhida pelo usuário.

      console.log('Arquivo criado com sucesso!');

      return shelljs.exit();
    } catch (error) {
      console.log(error);
    }
  }
}

export const GenFile = new GenerateController();
