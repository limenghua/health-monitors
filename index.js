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
            host:{
                host:'http://elasticsearch:elasticsearch@10.0.0.200:9200'
            }
        }
    ],
    redis:[
        {
            host:'localhost',
            port:6379,
            options:{
                password:'redis'
            }

        }
    ],
    api:[
        {
            url:'http://10.0.0.200/',
            method:'GET',
            expectedStatusCode: 406
        }
    ]
};

healthCheckSystem.do(configuration)
    .then(function (result){
        console.log(result);
    })
    .catch(function (error){
        console.log(error)
    })