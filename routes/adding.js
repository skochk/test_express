var express = require('express');
var fs = require('fs')
var router = express.Router();
let carsList = require('../storage/cars.json');




router.post('/', function(req, res, next){
    console.log(req.body);
    carsList.push(req.body);
    let json = JSON.stringify(carsList);
    fs.writeFile('./storage/cars.json', json, 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    // console.log(JSON.parse(req.body.m));
    // console.log('nu pochti dobavil');
    
});

module.exports = router;