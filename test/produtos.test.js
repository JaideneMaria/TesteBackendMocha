import * as chai from 'chai';
const expect = chai.expect;

import request from 'supertest';
import app from '../server.js';


describe('DELETE /produtos/:idProduto', function () {
    it('deve remover um produto', function (done) {
        const idProduto = 10;
        request(app)
            .delete(`/produtos/${idProduto}`)
            .expect(200)
            .expect('Produto removido com sucesso!')
            .end(done);
    });

    it('não deve encontrar o produto para remover', function (done) {
        const idProduto = 11;
        request(app)
            .delete(`/produtos/${idProduto}`)
            .expect(404)
            .expect('Produto não encontrado.')
            .end(done);
    });
});
