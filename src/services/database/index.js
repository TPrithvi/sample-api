const mongoose = require('mongoose');
const logger = require('../../utils/logger');

let listenersAlreadyAdded = false;

module.exports = {
  initialize(options = {}) {
    this.setListeners();

    return this.connect(options);
  },

  setListeners() {
    if (listenersAlreadyAdded) {
      return false;
    }

    listenersAlreadyAdded = true;

    // If the Node process ends, close the Mongoose connection
    const closeConnectionDueToAppTermination = () => {
      mongoose.connection.close(() => {
        logger.info('Mongoose default connection disconnected through app termination');
      });
    };

    // When successfully connected
    mongoose.connection.on('connected', () => {
      logger.info('Mongoose connected to database');
    });

    // If the connection throws an error
    mongoose.connection.on('error', (err) => {
      logger.error('Mongoose connection error: ', err);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
      logger.error('Mongoose connection closed');
    });

    mongoose.connection.on('uncaughtException', function (err) {
      logger.error(err);
    });

    process.on('SIGTERM', closeConnectionDueToAppTermination);
    process.on('SIGINT', closeConnectionDueToAppTermination);

    return true;
  },

  connect(options = {}) {
    return new Promise((resolve, reject) => {
      const {
        connectionUri,
        dbUser,
        dbPass
      } = options;

      const connectOpt = {
        user: dbUser,
        pass: dbPass,
        db: {
          native_parser: true
        },
        server: {
          poolSize: 5,
          reconnectTries: 10
        },
        replset: {
          poolSize: 5,
          reconnectTries: 10
        },
        useNewUrlParser: true,
        w: 1,
        j: true,
      };

      mongoose
        .connect(connectionUri, connectOpt)
        .then((response) => {
          resolve("Connected to the database successfully.")
        }, (response) => {
          reject(`Unable to connect to the database due: ${response}`);
        });
    });
  },

  disconnect() {
    return new Promise((resolve, reject) => {
      mongoose
        .disconnect()
        .then(response => {
          resolve(response);
        }, error => {
          reject(error)
        })
    });
  },

  close() {
    return mongoose.connection.close()
  },

  open() {
    return mongoose.connection.open()
  }
};