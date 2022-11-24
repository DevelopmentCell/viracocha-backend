"use strict";
const server1 = require("./src/app.ts");
const { conn } = require("./src/db.ts");
// Syncing all the models at once.
const port = process.env.PORT || 3001;
conn.sync({ alter: false }).then(() => {
  server1.listen(port, () => {
    console.log("%s listening at ", port); // eslint-disable-line no-console
  });
});
