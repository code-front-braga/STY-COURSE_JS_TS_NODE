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

  get profissao() {
    if (this.#profissao === 'Arquiteto de Software') {
      return `Ele não é mais programador. Agora ele é ${this.#profissao}`;
    }
    return this.#profissao;
  }

  set profissao(valor: string) {
    this.#profissao = valor;
  }
}
const leo = new Leonardo();
console.log(leo.profissao);
leo.profissao = 'Arquiteto de Software';
console.log(leo.profissao);
