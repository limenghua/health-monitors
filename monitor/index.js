const healthCheckSystem = require('health-check-system');
const report = require('./report');
const logger = require('../util/logger');

module.exports={
    start,
    stop
};

var configuration = {
    mongodb: [{
        name: 'mongodb1',
        //url: 'mongodb://mongodb:mongodb@10.10.0.48:27017/admin'
        url: 'mongodb://10.10.0.48:27017/admin'
    }],
    rabbitMq: [{
        name: 'rabbitMq1',
        url: 'amqp://admin:admin@10.10.3.143:5672'
    }],
    elasticSearch: [
        // {
        //     name:'elasticSearch1',
        //     host:'http://elasticsearch:elasticsearch@10.0.0.200:9200'
        // }
    ],
    redis: [{
        name: 'redis1',
        host: '10.10.3.143',
        port: 6379,
        options: {
            password: 'admin'
        }

    }] //,
    // api:[
    //     {
    //         name:'webserver1',
    //         url:'http://10.0.0.200/',
    //         method:'GET'//,
    //         //expectedStatusCode: 406
    //     }
    // ]
};

let stopMonitor = true;
const secondsInterval = 10;

function start() {
    if (!stopMonitor) return;

    stopMonitor = false;
    doMonitor();
}

function stop() {
    stopMonitor = true;
}

function doMonitor() {
    if (stopMonitor) return;

    logger.info("start check-----------------------");

    healthCheckSystem.do(configuration)
        .then(function (result) {
            report.ouput(result);
            logger.info("end check----------------------\n\n");
        })
        .catch(function (error) {
            report.error(result);
        });

    setTimeout(doMonitor, secondsInterval * 1000);
}