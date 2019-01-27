// Update with your config settings.
require('dotenv').config();
const pg_username = process.env.PG_USERNAME;
const pg_password = process.env.PG_PASS;

module.exports = {
  development: {
    client: "pg",
    connection: `postgres://${pg_username}:${pg_password}@localhost/physio`,
    pool: {
      afterCreate: function(conn, done) {
        conn.query('SET timezone ="UTC";', function(err) {
          if (err) {
            done(err, conn);
          } else {
            console.log("database connection established");
            done(err, conn);
          }
        });
      },
    },
    migrations: { directory: __dirname + "/db/migrations" },
    seeds: { directory: __dirname + "/db/seeds" },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      afterCreate: function(conn, done) {
        conn.query('SET timezone ="UTC";', function(err) {
          if (err) {
            done(err, conn);
          } else {
            console.log("database connection established");
            done(err, conn);
          }
        });
      },
    },
    migrations: { directory: __dirname + "/db/migrations" },
    seeds: { directory: __dirname + "/db/seeds" },
  },
};
