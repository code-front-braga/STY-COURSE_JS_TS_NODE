// setInterval(() => {
//   returnConsole();
// }, 3000);

// const returnConsole = () => {
//   return console.log('meu console funcionou!');
// };

const myCallback = (func) => {
  console.log(func())
}

myCallback(() => {
  return 1 + 1;
})
