export namespace Pessoa1 {
  export let nome = 'Leo';

  const data = 1 + 1;

  export const calc = () => {
    return data;
  };
}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

import { Pessoa } from "./namespace-aninhados";
console.log(Pessoa.Joao.leo)
