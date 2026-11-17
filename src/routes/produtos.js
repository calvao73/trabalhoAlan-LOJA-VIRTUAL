
import express from 'express';
import db from '../database/configbd.js';
const express router = express.Router();

router.get('/', async (req, res) =>{
    try{
        const [resultado] = await db.query(
            'SELECT * FROM produtos'
        );
        res.json(resultado);
    } catch (err) {
        res.status(500).json({ err: err.message});
    }
});
router.get("/busca_id", async (req, res) => {
    try{
        const[resultado] = await db.query(
            "SELECT * FROM produtos WHERE id_produtos = ?",[req.params.id]
        );
        res.json(resultado);
    }catch(err){
        res.status(500).json({err:err.message});
    }
});
router.post("/cadastrar" async (req, res) =>{
    try{
        const{nome, decricao, preco, estoque }=req.boyd;
        const[resultado]=await db.query(
            "INSERT INTO produtos (nome, decricao, preco, estoque) VALUES (?, ?, ?, ?)", [nome, descricao, preco, estoque]
        );
        res.json({
            mensagem:"produtos cadastrado👍👍",
            id:resultado.insertId
        });
    }catch(err){
        res.status(500).json({err:err.message});
    }
});
router.put("/atualizar", async (req, res)=>{
     try{
        const{nome, decricao, preco, estoque }=req.boyd;
        const[resultado]=await db.query(
            "UPDATE produtos SET nome = ?, descricao = ?, preco = ?, estoque = ? WHERE id_produtos", [nome, descricao, preco, estoque, req.params.id]
        );
        res.json({
            mensagem:"produtos atualizado👌",
        });
    }catch(err){
        res.status(500).json({err:err.message});
    }
});
export default router;
