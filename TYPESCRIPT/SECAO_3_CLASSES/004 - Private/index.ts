class Pessoa {
  private nome: string = '';
  private idade: number = 0;

  #profissao: string = 'Programador';

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  #comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }
}

const pessoa = new Pessoa('Leo', 33);
