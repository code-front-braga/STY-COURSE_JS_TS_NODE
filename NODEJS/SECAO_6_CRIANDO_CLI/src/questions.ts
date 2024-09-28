import path from 'node:path';
import fs from 'node:fs';

import { EChoicesBoilerPlate } from './enum/choices-boilerplate.enum.js';
import { EErrors } from './enum/errors.enum.js';
import { EGitName } from 'enum/git-name.enum.js';

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar?',
    choices: [EChoicesBoilerPlate.NODEJS_TS, EChoicesBoilerPlate.SCSS],
  },
  {
    type: 'input',
    name: 'folderName',
    message: 'Qual nome devo dar para a pasta do projeto?',
    validate(folderName: string) {
      // folderName não pode ser null
      // insira um valor para o nome!
      if (!folderName) return EErrors.ERROR_NULL;

      // não podemos ter caracteres especiais, exceto -, _, ' '
      const noSpecialCharsRegex = /[^\w\s-]/;
      if (noSpecialCharsRegex.test(folderName)) return EErrors.ERROR_SPECIAL_CHARACTERS;

      if (folderName === EGitName.NODEJS_TS || folderName === EGitName.SCSS) return EErrors.ERROR_GIT_NAME;

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK); // R de read. Para saber se tem permissão de leitura da pasta
        return EErrors.ERROR_INVALID_FOLDER;
      } catch (error) {}

      return true;
    },
  },
];
