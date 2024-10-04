// tuplas: quando limita a quantidade de elementos
let array1: [string, string, number, boolean] = ['Leo', 'Iza', 33, true];

let array2: Array<string | number | boolean> = [true, 'Leo', 123, 'Primo'];

let obj1: { nome: string; sobrenome: string; idade: number; deuBom: boolean } = {
  nome: 'Leo',
  sobrenome: 'Primo',
  idade: 33,
  deuBom: true,
};

let obj2: Array<{ nome: string; sobrenome: string; idade: number; deuBom: boolean }> = [
  {
    nome: 'Leo',
    sobrenome: 'Primo',
    idade: 33,
    deuBom: true,
  },
  {
    nome: 'Iza',
    sobrenome: 'Primo',
    idade: 36,
    deuBom: false,
  },
  {
    nome: 'Liz',
    sobrenome: 'Andrade',
    idade: 1,
    deuBom: true,
  },
];

console.log(array1);
console.log(array2);
console.log(obj1);
console.log(obj2);
