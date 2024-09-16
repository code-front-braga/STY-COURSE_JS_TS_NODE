#!/usr/bin/env node
import inquirer from 'inquirer';

import { questions } from 'questions.js';

import { IAnswers } from 'interface/answers.interface.js';
import { GenFile } from 'controller/generate.controller.js';
class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      GenFile.gen(answers);
    });
  }
}

new Init();
