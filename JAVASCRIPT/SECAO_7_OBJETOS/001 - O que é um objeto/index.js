let Tenis = {
  type: 'Tênis de corrida',
  cadarço: 'G',
  stock: false,
  size: {
    palmilha: 39,
    tenis: 40,
    caixa: {
      largura: 10,
      altura: 20,
      profundidade: 30,
    },
  },
  marcaArray: [
    {
      nome: 'Nike',
    },
    {
      nome: 'Adidas',
    },
    {
      nome: 'Puma',
    },
  ],
  getMarca: function (params) {
    return this.marcaArray[params].nome;
  },
  setMarca: function (marca) {
    this.marcaArray.push({
      nome: marca,
    });
  },
};

console.log(Tenis);
console.log(Tenis.type);
