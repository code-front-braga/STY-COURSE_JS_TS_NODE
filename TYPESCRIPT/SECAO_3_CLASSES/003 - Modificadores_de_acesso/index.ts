/**
 * public: pode ser acessado tanto pela mesma classe, classes filhas e outras classes;
 * protected: pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes;
 * private: pode ser acessada somente pela própria classe;
 */

class Pessoa {
  private nome: string = '';
  private idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  protected fezAniversario() {
    return `O ${this.nome} fez ${++this.idade} anos`;
  }
}

const pessoa = new Pessoa('Leo', 33);
pessoa.comer('Macarrão');
