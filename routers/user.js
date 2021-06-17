const { Router } = require('express');
const db = require('../database');
const router = Router();

router.use((req, res, next) => {
    console.log("Ok");
    next();
});


router.post('/', (req, res) => {
    const { firstname, surname, age, address, cellnumber, emergency } = req.body;

    db.query(`INSERT INTO people (firstname, surname, age, address, cellnumber, emergency ) VALUES('${firstname}' , '${surname}', '${age}', '${address}', '${cellnumber}', '${emergency}')`);
    res.status(201);
    res.send("New user has been added to the database!");
    res.send(req.body);



});


module.exports = router;