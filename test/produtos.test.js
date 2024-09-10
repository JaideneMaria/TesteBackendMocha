import * as chai from 'chai';
const expect = chai.expect;

import request from 'supertest';
import app from '../server.js';

// describe('GET /produtos/:idProduto', function() {
//     it('deve retornar um produto por ID', function(done) {
//         const testId = 2;
//         request(app)
//             .get(`/produtos/${testId}`)
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .expect(function(res) {
//                 console.log("Produto retornado:", res.body);
//                 expect(res.body).to.have.property('idProduto', testId);
//             })
//             .end(done);
//     });
// });







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

