import { EventEmitter } from 'node:events';

const event = new EventEmitter();

const eventHello = (message: string, name: string) => {
  console.log(message, name);
};

event.addListener('ola', eventHello);
event.on('ola', eventHello);

// Recebe o evento apenas uma vez;
// event.once('ola', eventHello);

setInterval(() => {
  console.log('Contador', event.listenerCount('ola'));

  event.emit('ola', 'Deu bom!', 'Leo');
  // event.removeListener('ola', eventHello);

  event.removeAllListeners('ola')
}, 1000);
