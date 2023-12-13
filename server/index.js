const express = require("express");
const { PORT } = require("./config/env");
const { initDb } = require("./config/initDb");
const routes = require("./config/routes");
const expressConfig = require("./config/express");

const app = express();
expressConfig(app);
app.use(routes);
initDb().then(
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`))
);
