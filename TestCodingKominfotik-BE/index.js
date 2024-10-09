const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()

// routes
app.get("/test", (req, res) => {
  res.json({ message: "App started" });
});
// Set template engine
// app.set('view engine', 'ejs');

// Handling 404 - Route not found
// app.use((req, res, next) => {
//   res.status(404).render('notfound', { url: req.originalUrl });
// });



// secured routes
require("./app/routes/pasien.route")(app)
require("./app/routes/kesehatan.route")(app)
require("./app/routes/kunjungan.route")(app)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
