import * as chai from 'chai';
const expect = chai.expect;

import request from 'supertest';
import app from '../server.js';  



// describe('GET /pedidos', function () {
//     it('Retornar todos os pedidos', function (done) {
//         request(app)
//             .get('/pedidos')
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .end(function (err, res) {
//                 if (err) return done(err);
//                 expect(res.body).to.be.an('array');
//                 done();
//             });
//     });
// });


// describe('PUT /pedidos/:idPedido', function() {
//     it('Atualizar um pedido existente', function(done) {
//         const atualizarDados = {
//             dataEmissao: '2021-10-10',
//             statusPedido: 'Enviado',
//             idUsuario: 2,
//             idProduto: 3
//         };
//         const idPedido = 2;
//         request(app)
//             .put(`/pedidos/${idPedido}`)
//             .send(atualizarDados)
//             .expect(200)
//             .expect('Pedido atualizado com sucesso!')
//             .end(done);
//     });
// });
