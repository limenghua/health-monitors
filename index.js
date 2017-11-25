var healthCheckSystem = require('health-check-system');

var configuration = {
    mongodb: [
        {
            name:'mongodb1',
            url: 'mongodb://mongodb:mongodb@10.0.0.100:27017/admin'
        }
    ],
    rabbitMq:[
        {
            name:'rabbitMq1',
            url:'amqp://rabbitmq:rabbitmq@10.0.0.200:5672'
        }
    ],
    elasticSearch:[
        {
            name:'elasticSearch1',
            host:'http://elasticsearch:elasticsearch@10.0.0.200:9200'
        }
    ],
    redis:[
        {
            name:'redis1',
            host:'localhost',
            port:6379,
            options:{
                password:'redis'
            }

        }
    ],
    api:[
        {
            name:'webserver1',
            url:'http://10.0.0.200/',
            method:'GET'//,
            //expectedStatusCode: 406
        }
    ]
};

let stopMonitor = true;
const secondsInterval = 10;
start();

return;

function start(){
    if(!stopMonitor)return;

    stopMonitor = false;
    doMonitor();
}
function stop(){
    stopMonitor = true;
}

function doMonitor(){
    if(stopMonitor)return;

    healthCheckSystem.do(configuration)
    .then(function (result){
        console.log(result);
    })
    .catch(function (error){
        console.log(error)
    });

    setTimeout(doMonitor,secondsInterval*1000);
}

