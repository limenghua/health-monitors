const healthCheckSystem = require('health-check-system');
const report = require('./report');
const logger = require('../util/logger');
const path = require('path');
const fs = require('fs');

module.exports={
    start,
    stop
};

const filePath = __dirname + '/config.json';
let configuration = JSON.parse(fs.readFileSync( filePath));

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