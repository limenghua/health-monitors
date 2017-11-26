const logger = require('../util/logger');
const web = require('../web');
const moment = require('moment');

function output(result){
    let health = result.health ;
    let name = result.configuration.name;
    let message = result.message;

    if(health){
        let msg = name + ":\t[OK] \t"+message;
        logger.info(msg);
        web.ouput(moment().format() +":\t"+msg);
    }else{
        let msg = name+":\t[Error] \t"+message;
        logger.error(msg);
        web.ouput(moment().format() +":\t"+msg);
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