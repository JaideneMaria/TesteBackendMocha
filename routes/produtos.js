import express from 'express';
const router = express.Router();
import dao from '../database/dao.produtos.js'


router.get('/', function (req, res){
    dao.list().then( ([rows]) =>{
        res.json(rows)
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro ao listar "produtos"');
    });

})

router.get('/:idProduto', function (req, res){
    const idProduto = req.params.idProduto
    dao.findById(idProduto)
        .then( ([rows]) =>{
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('Produto não encontrado.');
            }
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro ao listar "produto"');
    });
})

router.post('/', function(req, res){
    const {nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica} = req.body;
    dao.save(nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica)
        .then( (results) =>{
            const result = results[0];
            res.status(201).json({idProduto: result.insertId});
        }).catch(err => {
            console.log(err);
            res.status(500).send('Erro ao cadastrar o produto');
        });
})

router.put('/:idProduto', async (req, res) => {
    const idProduto = req.params.idProduto;
    const { nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica } = req.body;
    
    try {
        // Primeiro, verifica se o produto existe
        const verificarProduto = await dao.findById(idProduto);
        if (verificarProduto[0].length === 0) {
            return res.status(404).send('Produto não encontrado.');
        }
        
        // Se existir, prossegue com a atualização
        const result = await dao.update(idProduto, nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica);
        if (result[0].affectedRows === 0) {
            res.status(404).send('Produto não encontrado para atualização.');
        } else {
            res.send('Produto atualizado com sucesso!');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao atualizar o produto');
    }
});


router.delete('/:idProduto', async (req, res) => {
    const idProduto = req.params.idProduto;
    try {
        const produtoExistente = await dao.findById(idProduto);
        if (produtoExistente[0].length === 0) {
            return res.status(404).send('Produto não encontrado.');
        }

        const resultado = await dao.remove(idProduto);
        if (resultado.affectedRows === 0) {
            res.status(404).send('Produto não encontrado.');
        } else {
            res.send('Produto removido com sucesso!');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao deletar o produto');
    }
});


export default router;