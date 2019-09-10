var express = require('express');
var router = express.Router();
let carsList = require('../storage/cars.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.send(carsList);
  console.log(carsList.length);
});

router.get('/all', function(req,res,next){
  res.json(carsList);
});


// for(let i = 0; i<carsList.length; i++){
//   router.get(`/${i}`, function(req, res, next){
//     res.json(carsList[i]);
//   })
// }

router.get('/cars/:id', function(req, res){
  if(req.params.id < carsList.length && req.params.id > 0){
    res.json(carsList[req.params.id-1]);
  }else{
    res.sendStatus(404);
  }
  
})


module.exports = router;
