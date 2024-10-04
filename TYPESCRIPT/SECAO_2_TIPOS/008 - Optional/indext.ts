import { clear } from 'console';

const fn = (nome: string, idade?: number) => {
  if (!idade) return `nome: ${nome}, idade: sem valor definido.`;

  return `nome: ${nome}, idade: ${idade}`;
};
console.log(fn('Leo'));

const pessoa: { nome: string; idade?: number } = { nome: 'Leo', idade: 33 };
console.log(pessoa);
