var config = require('../config')();
var http = require('http');
var Promise = require('promise');
var _ = require('underscore');
var request = require('request');

function getStats(){
    return new Promise(function(resolve,reject){
        request.get(config.jenkins.stats,function(err,res,body){
            if(!err && res.statusCode == 200) {
                resolve(body);
            }else{
                reject(err);
            }
        });

    });
}

module.exports = {
    getStats:getStats
};