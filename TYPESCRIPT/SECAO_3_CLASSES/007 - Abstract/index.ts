abstract class Pessoa {
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

  protected abstract profissao: string;

  public abstract qualSuaProfissao(): string;
  public abstract qualSeuSalario(salario: number): number;
}

class Maria extends Pessoa {
  protected profissao: string = 'Programadora';

  constructor() {
    super('Leo', 31);
  }

  public qualSuaProfissao(): string {
    return `Sua profissão é ${this.profissao}`;
  }

  public qualSeuSalario(salario: number): number {
    return salario;
  }
}

class Leo extends Pessoa {
  protected profissao: string = 'Programador';
  constructor() {
    super('Leo', 31);
  }

  public qualSuaProfissao(): string {
    return `Sua profissão é ${this.profissao}`;
  }

  public qualSeuSalario(salario: number): number {
    return salario;
  }
}

const maria = new Maria();
