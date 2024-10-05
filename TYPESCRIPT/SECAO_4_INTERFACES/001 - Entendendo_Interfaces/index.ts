interface IPessoa {
  nome: string;
  idade: number;
  readonly cpf: number;
  enabled(): boolean;
}

const pessoa: IPessoa = {
  nome: 'Leo',
  idade: 33,
  cpf: 111111,
  enabled: () => {
    return true;
  },
};

class Leo implements IPessoa {
  nome: string = 'Leo';
  idade: number = 33;

  readonly cpf: number = 11111;

  enabled(): boolean {
    return true;
  }
}

class Iza implements IPessoa {
  nome: string = 'Iza';
  idade: number = 36;

  readonly cpf: number = 11111;

  enabled(): boolean {
    return true;
  }
}
