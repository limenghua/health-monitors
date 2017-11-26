const logger = require('../util/logger');

function output(result){
    let health = result.health ;
    let name = result.configuration.name;
    let message = result.message;

    if(health){
        logger.info(name + ":\t[OK] \t"+message);
    }else{
        logger.error(name+":\t[Error] \t"+message);
    }
}

exports.ouput = function (results){
    results.success.details.forEach(element => {
        output(element);
    });

    results.error.details.forEach(element => {
        output(element);
    });

}

exports.error = function (results){
    logger.error(results);
}