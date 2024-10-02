const pedido = pedido => {
  return new Promise((resolve, reject) => {
    if (pedido === 'Pizza') {
      reject(`Não temos o seu pedido: [${pedido}]`);
    }

    setTimeout(() => {
      resolve(`Chegou o seu pedido [${pedido}]`);
    }, 5000);
  });
};

Promise.all([
  pedido('Arroz'),
  pedido('Feijão'),
  pedido('Pizza')
    .then(resPedidos => {
      console.log(resPedidos);
    })
    .catch(error => {
      console.log(error);
    }),
]);
