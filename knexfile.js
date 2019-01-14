// Update with your config settings.
module.exports = {
  development: {
    client: "pg",
    connection: `postgres://${process.env.PG_USERNAME}:${
      process.env.PG_PASS
    }@localhost/physio`,
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
