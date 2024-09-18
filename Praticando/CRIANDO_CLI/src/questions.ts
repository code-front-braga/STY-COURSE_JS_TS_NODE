import path from 'node:path';
import fs from 'fs';

import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum.js';
import { EErrors } from 'enum/errors.enum.js';
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
      if (!folderName) return EErrors.ERROR_NULL;

      const noSpecialCharRegex = /[^\w\s-]/;

      if (noSpecialCharRegex.test(folderName)) return EErrors.ERROR_SPECIAL_CHARACTERS;

      if (folderName === EGitName.NODEJS_TS || folderName === EGitName.SCSS) return EErrors.ERROR_GIT_NAME;

      try {
        const dir = path.resolve(folderName);
        console.log(dir)
        fs.accessSync(dir, fs.constants.R_OK);

        /* path é um módulo do Node.js que fornece utilitários para trabalhar com caminhos de arquivos e diretórios;
         resolve é um método desse módulo que transforma um caminho relativo em um caminho absoluto. Ou seja, ele pega o nome do diretório que você passou (folderName) e o transforma em um caminho completo, considerando o diretório atual onde o código está sendo executado.
         Exemplo: Se você estiver executando o código em um diretório chamado "projetos" e passar "dados" como folderName, o path.resolve vai transformar isso em algo como "/home/seu_usuario/projetos/dados".

         fs.accessSync: Essa função do módulo fs (filesystem) do Node.js verifica se um usuário tem permissão para acessar um arquivo ou diretório de uma determinada forma. O Sync no final indica que a função vai esperar a operação terminar antes de continuar o código.
         dir: É o caminho completo do diretório que queremos verificar, obtido na linha anterior.
         fs.constants.R_OK: Essa constante indica que queremos verificar se o usuário tem permissão de leitura para o diretório.
         Esse código é útil quando você precisa verificar se um diretório existe e se o seu programa tem permissão para ler os arquivos dentro dele antes de realizar alguma operação, como criar arquivos, ler dados, etc. Isso evita que seu programa tente fazer algo que não é permitido e cause erros.
        */
        return EErrors.ERROR_INVALID_FOLDER;
      } catch (error) {}

      return true;
    },
  },
];
