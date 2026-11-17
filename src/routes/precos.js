import express from "express";
import db from "../database/configbd.js";
const router = express.Router();


1
router.get("/", async (req, res) => {
    try {
        const [resultado] = await db.query(
            "SELECT id_produto, nome, preco FROM produtos"
        );

        res.json(resultado);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

2
router.get("/:id", async (req, res) => {
    try {
        const [resultado] = await db.query(
            "SELECT nome, preco FROM produtos WHERE id_produto = ?",
            [req.params.id]
        );

        res.json(resultado);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

3
router.put("/:id", async (req, res) => {
    try {
        const { preco } = req.body;
        const [resultado] = await db.query(
            "UPDATE produtos SET preco = ? WHERE id_produto = ?",
            [preco, req.params.id]
        );

        res.json({
            mensagem: "Preço atualizado!"
        });
        
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

export default router;