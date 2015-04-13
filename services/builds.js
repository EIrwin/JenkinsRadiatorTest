var config = require('../config')();
var http = require('http');
var Promise = require('promise');
var _ = require('underscore');
var request = require('request');

function getBuilds(){
    return new Promise(function(resolve,reject){
        request.get(config.jenkins.builds,function(err,res,body){
            if(!err && res.statusCode == 200) {
                resolve(body);
            }else{
                reject(err);
            }
        });
    });
}

module.exports = {
    getBuilds:getBuilds
};