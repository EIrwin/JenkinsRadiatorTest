var express = require('express');
var router = express.Router();
var Response = require('../response');
var config = require('../config')();
var http = require('http');
var jobs = require('../services/jobs.js');

/* GET home page. */
router.get('/', function(req, res) {
    var response = new Response();
    jobs.getJobs()
        .then(function(result){
            res.send(response.complete(result));
        })
        .catch(function(error){
            res.status(400).send(response.complete(error));
        });

});

module.exports = router;
