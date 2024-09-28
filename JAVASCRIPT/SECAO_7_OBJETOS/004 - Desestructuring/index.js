const Tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: 'Nike' }, { nome: 'Adidas' }, { nome: 'Puma' }],
  secret: 123456,
  n: 5,
  link: { a: 'a é = a', b: { c: 'C é = c' } },
};

// const {
//   tamanho,
//   estoque,
//   marcas,
// } = Tenis;

// console.log(tamanho);
// console.log(estoque);
// console.log(marcas);

// const { secret: randonNumber, n: avaliacoes } = Tenis; // alias

// console.log(randonNumber);
// console.log(avaliacoes);

const {
  link: {
    a,
    b: { c },
  },
} = Tenis;
console.log(a, c);

console.log(Tenis.link.a, Tenis.link.b.c);
