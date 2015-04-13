module.exports = function(){

    var base = 'http://eirwin.developer.devenv.phx.integrateteam.com:8080/';
    return {
        jenkins:{
            jobs:base + 'api/json/',
            builds:base + 'queue/api/json'
        }
    }
}