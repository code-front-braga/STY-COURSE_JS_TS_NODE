import express from 'express';
import { router } from 'router';

class Main {
  private _server; //private

  constructor() {
    this._server = express();
    this._middleware();
    this._router;
  }

  private _middleware() {
    /**
     * Em um contexto de desenvolvimento de software,
     * um middleware é uma camada de software que atua
     * como um intermediário entre diferentes componentes
     * de um sistema. Ele desempenha um papel fundamental
     * no processamento de solicitações e respostas em
     * um aplicativo web ou API.
     */

    /**
     * express.json() é usado para analisar os corpos de solicitação JSON
     * que chegam a um servidor Express.
     *
     * Quando você envia uma solicitação HTTP com o cabeçalho
     * Content-Type: application/json e um corpo JSON,
     * o express.json() é responsável por amalisar o corpo
     * da solicitação e expor os dados JSON em req.body.
     */

    this.server.use(express.json());
  }

  private _router() {
    this.server.use(router);
  }

  get server() {
    return this._server;
  }
}

export const main = new Main();
