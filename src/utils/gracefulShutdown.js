/**
 * Add listener to server so it stops the server for receiving new connections
 * and and shut down server once it finished handling all requests
 *
 * @function
 * @param {object} server - Instance of express application
 *
 */
module.exports = server => {
  const connections = {};

  server.on('connection', conn => {
    const key = `${conn.remoteAddress}:${conn.remotePort}`;
    connections[key] = conn;

    conn.on('close', () => {
      delete connections[key];
    });
  });

  server.shutdown = cb => {
    server.close(cb);

    // eslint-disable-next-line
    for (const key in connections) {
      connections[key].destroy();
    }

    // eslint-disable-next-line no-process-exit
    process.exit();
  };
};
