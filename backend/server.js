const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv/config')

const app = express();

app.use(cors());
app.use(bodyparser.json());

// Database Connection
const db = mysql.createConnection({
    // Database Information
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,   
});

// Check Database Connection
db.connect(err => {
    if (err) {
        console.log(err, 'DB error');
    } else {
        console.log('Database Connected... Successfully');
    }
});


// Get All Data
app.get('/workers', (req, res) => {
    // console.log('get all users data');

    let qr = `select * from workers`;
    
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0){
            console.log('Getting All Data.')
            res.send({
                message: 'All User Data',
                data: result
            });
        }
    });
});

// Get Signal Data
app.get('/workers/:id/:firstname/:lastname', (req, res) => {
    // console.log('get signal data')
    // console.log(req.params)

    let getID = req.params.id;
    let getFirstName = req.params.firstname;
    let getLastName = req.params.lastname;

    let qr = `select * from workers where id=${getID} and firstname='${getFirstName}' and lastname='${getLastName}'`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0){
            console.log('Getting Single Data.')
            res.send({
                message: 'Single User\'s Data',
                data: result
            });
        }
    });
});

// Create Data
app.post('/workers', (req, res) => {
    // console.log('postdata')
    // console.log(req.body, 'createdata')

    let lastName = req.body.lastName;
    let firstName = req.body.firstName;
    let address = req.body.address;
    let city = req.body.city;
    let state = req.body.state;
    let zipcode = req.body.zipcode;
    let status = req.body.status;
    let email = req.body.email;
    let mobile = req.body.phoneNumber;
    let hiredDate = req.body.hiredDate;
    let department = req.body.department;
    let position = req.body.position;
    let description = req.body.description;


    let qr = `insert into workers(firstname, lastname, address, city, state, zipcode, status, email, mobile, hireDate, department, position, description) value('${firstName}', '${lastName}', '${address}', '${city}', '${state}', '${zipcode}', '${status}', '${email}', '${mobile}', '${hiredDate}', '${department}', '${position}', '${description}')`;
    
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                message: 'Data Insert Error...'
            });
        } else {
            console.log('Data Inserted.')
            res.send({
                message: 'Data Inserted.'
            });
        }
    });
});

// Update Single Data
app.put('/workers/:id', (req, res) => {
    //console.log(req.body, 'update data')

    let getID = req.params.id;

    let lastName = req.body.lastName;
    let firstName = req.body.firstName;
    let address = req.body.address;
    let city = req.body.city;
    let state = req.body.state;
    let zipcode = req.body.zipcode;
    let status = req.body.status;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let hiredDate = req.body.hiredDate;
    let department = req.body.department;
    let position = req.body.position;
    let description = req.body.description;

    let qr = `update workers set lastname='${lastName}', firstname='${firstName}', address='${address}', city='${city}', state='${state}', zipcode='${zipcode}', status='${status}', email='${email}', mobile='${phoneNumber}', hireDate='${hiredDate}', department='${department}', position='${position}', description='${description}' where id=${getID}`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Data Updated.')
            res.send({
                message: 'Data Updated.'
            })
        } 
    })
})

// Delete Single Data
app.delete('/workers/:id', (req, res) => {
    let queryID = req.params.id;

    let qr = `delete from workers where id=${queryID}`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Data Deleted.')
            // console.log(result)
            res.send({
                message: 'Data Deleted.'
            });
        }
    });
});

app.post('applies', (req, res) => {
    let employee_id = req.body.employeeId 
    let lastName = req.body.lastName;
    let firstName = req.body.firstName;
    let email = req.body.email;
    let mobile = req.body.phone;
    let position = req.body.position;
    let department = req.body.department;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let details = req.body.details;

    let qr = `insert into applies(em_id, firstname, lastname, email, mobile, position, department, startDate, endDate, details) value('${employee_id}', '${firstName}', '${lastName}', '${email}', '${mobile}','${position}', '${department}', '${startDate}', '${endDate}', '${details}')`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                message: 'Apply Data Insert Error...'
            });
        } else {
            console.log('Apply Data Inserted.')
            res.send({
                message: 'Apply Data Inserted.'
            });
        }
    });
})

app.get('applies', (res, req) => {
    let qr = `select * from applies`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length >= 0){
            console.log('Getting All Data From Applies Table.')
            res.send({
                message: 'All Applied Data',
                data: result
            });
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log('Server Running...' + process.env.PORT)
});