const path = require('path');
const constants = require('../src/constants/index')

const env = process.env.NODE_ENV || 'testing';
const workingDirectory = path.join(__dirname, '../');

require('dotenv-safe')
    .config({
        allowEmptyValues: true,
        path: path.join(__dirname, `.env${env ? `.${env}` : ''}`),
        sample: path.join(__dirname, '.env.testing')
    });

// use srv record for the connection...
// this should be disabled for dev environments...
let protocol = process.env.DB_USE_SRV_RECORD === '1' ? 'mongodb+srv' : 'mongodb';
let retryWrites = process.env.DB_RETRY_WRITES || 'true';
let w = process.env.DB_W || 'majority';

// build the connection uri...
let connectionUri = `${protocol}://${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=${retryWrites}&w=${w}`;
if (process.env.DB_REPLICA_SET_NAME) {
    connectionUri += `&replicaSet=${process.env.DB_REPLICA_SET_NAME}`;
}

module.exports = {
    env,
    workingDirectory,
    port: process.env.PORT,
    exposeApiDocs: process.env.EXPOSE_API_DOCS,

    database: {
        connectionUri: connectionUri,
        dbUser: process.env.DB_USER || '', // sample-api
        dbPass: process.env.DB_PASS || ''  // testtest
    },
};