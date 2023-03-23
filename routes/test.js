var express = require('express');
var router = express.Router();
var request = require('request');


// Creating a POST request
router.post('/', function(req, res, next)  {
    console.log(req.body)



    request({
        url: "https://posttest.free.beeceptor.com/my/api/path",
        method: "POST",
        json: true,   // <--Very important!!!
        body: req.body
    }, function (error, response, body){
        console.log(response);
    });




    res.send("POST Request Called")
 })

 module.exports = router;
 





