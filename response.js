module.exports = function(){
    var _result = {};
    return {
        complete: function(data){
            _result.result = data;
            return _result;
        },
        hasErrors : function(){return _result.errors !== undefined;},
        errors: {
            add: function(code, message){
                if(!_result.errors)
                    _result.errors = [];
                _result.errors.push({code: code, details: message});
            }
        },
        warnings: {
            add: function(message){
                if(!_result.warnings)
                    _result.warnings = [];
                _result.warnings.push(message);
            }
        },
        info: {
            add: function(message){
                if(!_result.info)
                    _result.info = [];
                _result.info.push(message);
            }
        }
    }
}