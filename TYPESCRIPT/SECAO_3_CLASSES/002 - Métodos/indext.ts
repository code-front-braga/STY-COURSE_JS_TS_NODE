class Pessoa {
  nome: string = '';
  idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  fezAniversario() {
    return `O ${this.nome} fez ${++this.idade} anos`;
  }
}

const pessoa1 = new Pessoa('Leonardo', 33);
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.comer('Feijoada'));
console.log(pessoa1.fezAniversario());
