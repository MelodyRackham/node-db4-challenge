// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: '.data/recipe.db3',
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds',
    },
  },
  migrations: {
    directory: './migrations/20191212143042_recipe-schema.js',
  },

  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
};
