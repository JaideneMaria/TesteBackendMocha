import * as chai from 'chai';
const expect = chai.expect;

import request from 'supertest';
import app from '../server.js';  


// describe('POST /usuarios', function() {
//     it('Criar um novo usuário', function(done) {
//         const novoUsuario = {
//             nomeCliente: "Jaidene Silva",
//             cpf: "12345678910",
//             emailCliente: "jms@teste.com",
//             senha: "senha123",
//             tipo: 1
//         };
//         request(app)
//             .post('/usuarios')
//             .send(novoUsuario)
//             .expect(201)
//             .expect(function(res) {
//                 console.log("Usuário retornado:", res.body);
//                 expect(res.body).to.have.property('idUsuario');
//             })
//             .end(done);
//     });
// });
