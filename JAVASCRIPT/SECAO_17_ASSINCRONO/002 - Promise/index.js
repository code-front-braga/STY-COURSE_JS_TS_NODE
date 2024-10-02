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

// console.log(pedido('arroz')); // dessa forma fica como 'pending'

pedido('Pizza')
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('Deu bom todo o processo do pedido!');
  });
