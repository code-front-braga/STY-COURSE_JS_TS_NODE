// const bugNum = () => {
//   const number = '123';
//   debugger;
//   console.log(number === 123);
//   if (number === 123) {
//     return 'Seu número é 123 - type Number';
//   }

//   return 'Deu ruim!';
// };

// console.log(bugNum());

const bugNum = () => {
  try {
    const number = '123';
    console.log(number === 123);
    if (number === 123) {
      return 'Seu número é 123 - type Number';
    }

    throw new Error('Deu ruim!');
  } catch (error) {
    throw error;
    // se usar o return error a aplicação fica travada;
  }
};

console.log(bugNum());
console.log('continua executando');
