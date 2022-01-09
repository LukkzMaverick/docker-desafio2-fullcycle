const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2')

var pool = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});
pool.connect();

app.get('/', (req, res) => {

    try {
        var sql = mysql.format(`insert into people(name) values ("${generateName()}")`);
        pool.query(sql, function (error, results, fields) {
            if (error) {
                res.send(error);
            }
            var sql = mysql.format("SELECT * FROM people");
            pool.query(sql, function (error, results, fields) {
                if (error) {
                    res.send(error);
                }
                let people = []
                for (it of results) {
                    console.log(it)
                    people.push(`<li>${it.name}</li>`)
                }
                const html = `
                            <h1>Full Cycle Rocks!</h1>
                            <ul>
                                ${people}
                            </ul>
                        `
                return res.status(200).send(html);
            });
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send()
    }
})

app.listen(port, () => console.log(`listen is ${port}`))

let pessoas = [
    {
        nome: "MARIA",
        regiao: 0,
        freq: 11734129,
        rank: 1,
        sexo: ""
    },
    {
        nome: "JOSE",
        regiao: 0,
        freq: 5754529,
        rank: 2,
        sexo: ""
    },
    {
        nome: "ANA",
        regiao: 0,
        freq: 3089858,
        rank: 3,
        sexo: ""
    },
    {
        nome: "JOAO",
        regiao: 0,
        freq: 2984119,
        rank: 4,
        sexo: ""
    },
    {
        nome: "ANTONIO",
        regiao: 0,
        freq: 2576348,
        rank: 5,
        sexo: ""
    },
    {
        nome: "FRANCISCO",
        regiao: 0,
        freq: 1772197,
        rank: 6,
        sexo: ""
    },
    {
        nome: "CARLOS",
        regiao: 0,
        freq: 1489191,
        rank: 7,
        sexo: ""
    },
    {
        nome: "PAULO",
        regiao: 0,
        freq: 1423262,
        rank: 8,
        sexo: ""
    },
    {
        nome: "PEDRO",
        regiao: 0,
        freq: 1219605,
        rank: 9,
        sexo: ""
    },
    {
        nome: "LUCAS",
        regiao: 0,
        freq: 1127310,
        rank: 10,
        sexo: ""
    },
    {
        nome: "LUIZ",
        regiao: 0,
        freq: 1107792,
        rank: 11,
        sexo: ""
    },
    {
        nome: "MARCOS",
        regiao: 0,
        freq: 1106165,
        rank: 12,
        sexo: ""
    },
    {
        nome: "LUIS",
        regiao: 0,
        freq: 935905,
        rank: 13,
        sexo: ""
    },
    {
        nome: "GABRIEL",
        regiao: 0,
        freq: 932449,
        rank: 14,
        sexo: ""
    },
    {
        nome: "RAFAEL",
        regiao: 0,
        freq: 821638,
        rank: 15,
        sexo: ""
    },
    {
        nome: "FRANCISCA",
        regiao: 0,
        freq: 725642,
        rank: 16,
        sexo: ""
    },
    {
        nome: "DANIEL",
        regiao: 0,
        freq: 711338,
        rank: 17,
        sexo: ""
    },
    {
        nome: "MARCELO",
        regiao: 0,
        freq: 693215,
        rank: 18,
        sexo: ""
    },
    {
        nome: "BRUNO",
        regiao: 0,
        freq: 668217,
        rank: 19,
        sexo: ""
    },
    {
        nome: "EDUARDO",
        regiao: 0,
        freq: 632664,
        rank: 20,
        sexo: ""
    }
]


function generateName() {
    return pessoas[Math.floor(Math.random() * 20)].nome
}