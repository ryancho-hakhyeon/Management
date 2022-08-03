const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv/config')

const app = express();

app.use(cors());
app.use(bodyparser.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',   // Database Name
    port: 3306
});

// Check Database Connection
db.connect(err => {
    if (err) {
        console.log(err, 'DB error');
    } else {
        console.log('Database Connected...Successfully');
    }
});


// Get All Data
app.get('/user', (req, res) => {
    // console.log('get all users data');

    let qr = `select * from user`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }

        if (result.length > 0) {
            res.send({
                message: 'All User Data',
                data: result
            });
        }
    });
});

// Get Signal Data
app.get('/user/:id', (req, res) => {
    // console.log('get signal data')
    // console.log(req.params.id, 'getid')

    let getID = req.params.id;
    let qr = `select * from user where id = ${getID}`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'Get Signal Data',
                data: result
            });
        } else {
            res.send({
                message: 'Data Not Found'
            });
        }
    });
});

// Create Data
app.post('/user', (req, res) => {
    // console.log('postdata')
    // console.log(req.body, 'createdata')

    let lastName = req.body.lastname;
    let firstName = req.body.firstname;
    let eMail = req.body.email;
    let mobilePhone = req.body.mobile;

    let qr = `insert into user(firstname, lastname, email,mobile)
              value('${firstName}', '${lastName}', '${eMail}', '${mobilePhone}')`;
    
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send({
            message: 'Data Inserted'
        })
        // if (result.length > 0) {
        //     res.send({
        //         message: 'Data Inserted'
        //     });
        // } else {
        //     res.send({
        //         message: 'Data Insert Error...'
        //     });
        // }
    });
});

// Update Single Data
app.put('/user/:id', (req, res) => {
    //console.log(req.body, 'update data')

    let getID = req.params.id;

    let lastName = req.body.lastname;
    let firstName = req.body.firstname;
    let eMail = req.body.email;
    let mobilePhone = req.body.mobile;

    let qr = `update user set lastname='${lastName}', firstname='${firstName}', email='${eMail}', mobile='${mobilePhone}'
              where id=${getID}`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        } 
        res.send({
            message: 'Data Updated'
        })
    })
})

// Delete Single Data
app.delete('/user/:id', (req, res) => {
    let queryID = req.params.id;

    let qr = `delete from user where id = ${queryID}`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send({
            message: 'Data Deleted'
        });
    });
});



app.listen(3000, () => {
    console.log('Server Running...')
});