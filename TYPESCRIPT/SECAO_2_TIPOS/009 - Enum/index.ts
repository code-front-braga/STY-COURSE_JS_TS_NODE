enum EMes {
  JAN = 'Janeiro',
  FEV = 'Fevereiro',
  MAR = 'Março',
  ABR = 'Abril',
}

const pessoa: { nome: string; mesAniversario: string } = {
  nome: 'Leo',
  mesAniversario: EMes.ABR,
};

if (pessoa.mesAniversario === EMes.ABR) {
  console.log(pessoa);
}
