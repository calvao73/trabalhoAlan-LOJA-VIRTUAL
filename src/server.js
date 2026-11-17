import express from "express"
import produtos from "./routes/produtos.js"


app.use("/produtos",produtos);
const app =express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("Api rodando na porta 3000!")
})


