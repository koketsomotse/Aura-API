const { Router } = require('express');
const db = require('../database');
const router = Router();


router.get('/', function(req, res, next) {

    db.query('SELECT * FROM `people` ', function(error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
        console.log(results);
        res.render('user-list', { title: 'User List', userData: results });

    });

});


module.exports = router;