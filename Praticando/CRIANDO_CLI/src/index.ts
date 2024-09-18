#!/usr/bin/env node
import { GenFile } from 'controller/generate.controller.js';
import inquirer from 'inquirer';

import { IAnswers } from 'interface/answers.interface.js';
import { questions } from 'questions.js';

class Init {
  constructor() {
    /**
     * A biblioteca inquirer é usada para fazer perguntas ao usuário. Essas perguntas podem ser sobre o tipo de projeto que o usuário quer criar, o nome do projeto, etc.
     */
    inquirer.prompt(questions).then((answers: IAnswers) => {
      GenFile.gen(answers);
    });
  }
}

new Init();
