import http from 'node:http';

// Criando servidor:
const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    return res.end(
      JSON.stringify({
        status: 200,
        body: 'Bem-vindo a Home',
      }),
    );
  }

  if (url === '/contato' && method === 'GET') {
    return res.end(
      JSON.stringify({
        status: 200,
        body: 'Entre em contato.',
      }),
    );
  }

  res.statusCode = 404;
  return res.end(
    // O usuário vai ver essa mensagem na tela;
    JSON.stringify({
      status: 404,
      body: '404 (Not Found)',
    }),
  );
});

server.listen(3000, () => {
  // O server.listen é para criar a porta 3000 para poder acessá-lo;
  console.log('Deu bom!');
});
