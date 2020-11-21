const express = require("express");
const db = require("./models");

const PORT = process.env.PORT || 4000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
  });
});
