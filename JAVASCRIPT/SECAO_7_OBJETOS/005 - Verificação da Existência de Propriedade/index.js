const Tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: 'Nike' }, { nome: 'Adidas' }, { nome: 'Puma' }],
  secret: 123456,
  n: 5,
  link: { a: 'a é = a', b: { c: 'C é = c' } },
};

// if (Tenis.hasOwnProperty('tamanho')) {
//   console.log('Existe tamanho');
// } else {
//   console.log('Não existe tamanho');
// }

console.log('tamanho' in Tenis);
