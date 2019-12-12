// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      // ❓ // filename: './dev.sqlite3',
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds',
    },
  },
  // ❓  // migrations: {
  // //   directory: "./migrations/(insert file here)"
  // // }

  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
};
