class Pessoa {
  protected nome: string = '';
  protected idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `O ${this.nome} fez ${++this.idade} anos`;
  }
}
const pessoa = new Pessoa('Leo', 33);

class Leonardo extends Pessoa {
  #profissao: string = 'Programador';

  constructor() {
    super('Leo', 31);
  }

  public getProfissao() {
    return `${this.nome} trabalha como ${this.#profissao}`;
  }
}
const leo = new Leonardo();
console.log(leo.getProfissao());

// class Iza extends Pessoa {
//   constructor() {
//     super('Iza', 36);
//   }
// }
// const iza = new Iza();

console.log(leo);
console.log(leo.comer('Arroz'));
