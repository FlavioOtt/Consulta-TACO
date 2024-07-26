const app = require("../src/api");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Origin", "*");

    next();
})
let port = 3001;

app.listen(port);

console.log(`Iniciando o app na porta ${port}`);