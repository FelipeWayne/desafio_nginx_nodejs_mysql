const express = require('express');
const app = express();
const port = 3000;
// Configuração do banco de dados. 
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'node_db'
};

// Definindo o intervalo de números aleatórios que serão inseridos no registro.
const min = 1;
const max = 100;


// Importando o módulo mysql
const mysql = require('mysql');

// Rota principal
app.get('/', (req, res) => {
    // Gerando um número aleatório para ser inserido no registro.
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

    // Criando a conexão com o banco de dados
    const connection = mysql.createConnection(config);
    // Inserindo um registro na tabela peoples
    const sqlInsert = `insert into peoples(name) values('Felipe Augusto ${randomNum}');`;
    connection.query(sqlInsert);
    console.log('Registro inserido com sucesso!');

    // Inicializando as variáveis de controle. Para montar a lista de pessoas cadastradas.
    let ul, li = '';


    // Consultando os registros da tabela peoples
    connection.query('SELECT * FROM peoples', (error, results) => {
        if (error) {
            console.error(error);
            throw error;
          }
          console.log(results);
          if (results) {
            results.map(element => {
                li += `<li>${element.id} - ${element.name}</li>`;
            });
            ul = `<ul>${li}</ul>`;
        }
        res.send(`<h1>Full Cycle Rocks!</h1>${ul}`);
    });
    connection.end();


});

// Iniciando o servidor.
app.listen(port, () => console.log(`Rodando na porta ${port}`));