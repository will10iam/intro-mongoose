const express = require("express");

const dbConnect = require("./config/db.config")
dbConnect();
// outra maneira de invocar => require("./config/db.config")();
const app = express();

// outra maneira de invocar => const app = require("express")();

app.use(express.json()); // MIDDLEWARE

// Rotas ou Roteadores

app.listen(4000, () => {
    console.log("Tamo indo daora!")
});

