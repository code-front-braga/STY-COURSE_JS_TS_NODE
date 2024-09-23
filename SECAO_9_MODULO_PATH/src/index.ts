import path from 'node:path';

console.log('join:', path.join('/outra-pasta', 'leo'));

console.log('resolve:', path.resolve('src', 'outra-pasta'));

console.log('dirname:', path.dirname('C:/teste/123'));

console.log('dirname/resolve', path.dirname(path.resolve()));

console.log('basename', path.basename('teste'));
console.log('basename/resolve', path.basename(path.resolve('src')));

/**
 * path.extname(): essa função é usada para obter a extensão de um caminho de arquivo.
 * ela retorna parte da string que representa a extensão do arquivo, incluindo o ponto ('.') antes da extensão.
 */

console.log(path.extname('teste/leo/index.ts'));
