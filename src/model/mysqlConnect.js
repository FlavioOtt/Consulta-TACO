const mysql = require("mysql2/promise");

async function connect(){
    if (global.connection && global.connection.state !== "disconnected")
        return global.connection;
    
    const connection = await mysql.createConnection({
        host: "127.0.0.1",
        port: "3307",
        user: "root",
        password: "",
        database: "alimentos",
        multipleStatements: true
    });

    console.log("Conectou no MySQL!");
    
    global.connection = connection;
    return connection;
}

async function query(sql){
    const conn = await connect();
    const [rows] = await conn.query(sql);
    return rows;
}

module.exports={ query, connect }