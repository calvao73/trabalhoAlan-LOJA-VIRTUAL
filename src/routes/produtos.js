
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
