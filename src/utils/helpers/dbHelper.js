const CONFIG = require('../../../config');
const dbService = require('../../../src/services/database');
const async = require('async');
var mongoose = require('mongoose');
const collections = ['samples'];
var db;

/**
 * Helps you to connect to the database for tests.
 */
const dbHelper = function () {

    /**
     * Disconnect from the database mainly for tests.
     */
    this.disconnect = function (callback) {
        const resultCallback = typeof callback === 'function' ? callback : function() {}

        dbService
            .close()
            .then(
                response => {
                    console.info("Connection closed successfully. ");
                    resultCallback()
                },
                error => {
                    console.error(error);
                    resultCallback(error);
                }
            )

    };

    /**
     * Connect to the database mainly for tests.
     */
    this.connect = function () {
        dbService
            .initialize(CONFIG.database)
            .then(response => {
                console.info(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    this.clearDB = function (cb) {
        async.each(collections, function (name, eachCb) {
            db.collection(name).deleteMany({}, eachCb);
        }, cb);
    };
};

module.exports = new dbHelper();
