import fs from 'node:fs';
import path from 'node:path';

try {
  if (!fs.existsSync(path.resolve('tmp'))) {
    console.log(path.resolve('tmp'));
    fs.mkdirSync(path.resolve('tmp'));
  }

  const archivePath = path.resolve('tmp', 'arquivo.txt');
  if (!fs.existsSync(archivePath)) {
    const content = 'Deu bom na criação do arquivo!';
    fs.writeFileSync(archivePath, content, 'utf-8');
  }

  const myArchiveText = fs.readFileSync(archivePath, 'utf-8');
  fs.writeFileSync(archivePath, `${myArchiveText}\ntest`);

  // Renomeando arquivos
  // fs.renameSync(
  //   path.resolve('tmp', 'nova-pasta-02', 'arquivo-01.txt'),
  //   path.resolve('tmp', 'nova-pasta-02', 'arquivo-02.txt'),
  // );

  // Deletando arquivos e pastas
  // fs.unlinkSync(path.resolve('tmp', 'nova-pasta-02', 'pode-deletar', 'arquivo.txt')); // deletando o arquivo dentro da pasta 'pode 'deletar'
  // fs.rmdirSync(path.resolve('tmp', 'nova-pasta-02', 'pode-deletar')); // só deleta a pasta 'pode deletar' se não tiver arquivos dentro;

  // console.log(fs.readdirSync(path.resolve('tmp', 'nova-pasta-02', 'pode-deletar'))); // vê os arquivos que estão dentro da pasta 'pode-deletar'

  fs.rmSync(path.resolve('tmp', 'nova-pasta-02', 'pode-deletar'), {
    recursive: true,
  });
} catch (error) {
  console.log(error);
}
