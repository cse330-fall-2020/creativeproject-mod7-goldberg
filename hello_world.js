<<<<<<< HEAD
const express = require('express')
const app = express()
const port = 3456
=======
const http = require("http"),
    fs = require("fs"); //file server
const express = require('express');
const app = express();
const port = 3456;
/*const file = "client.html";
const cssfile = "client.css";

/*const server = http.createServer(function (req, res) {
    res.send('Hello World!');
})*/
>>>>>>> d2fef1ac732efb07687f5769da56b0be32f33536

app.get('/', (req, res) => {
    var sql = require("mssql");
    var config = {
        user: 'carrotmanXVI',
        password: 'a4848441662',
        server: 'ec2-100-26-241-58.compute-1.amazonaws.com',
        database: 'GamesDB'
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from test', function (err, recordset) {
            
            if (err) console.log(err);

            // send records as a response
            res.send(
                'Hello Wrold!',
                recordset
            );
        });
    });

    res.send('Hello Wrold!');
})

app.listen(port, () => {
<<<<<<< HEAD
  console.log(`Example app listening at http://localhost:${port}`)
})
=======
    console.log(`hello_world listening at http://localhost:${port}`);
})
>>>>>>> d2fef1ac732efb07687f5769da56b0be32f33536
