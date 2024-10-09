//mulai kembali dari index models
const dbConfig = require("../config/klinik.db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

// membuat module
const db = {};

// sequelize
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// model
db.pasien = require("./pasien.model.js")(sequelize, Sequelize);
db.kesehatan = require("./kesehatan.model.js")(sequelize, Sequelize);
db.kunjungan = require("./kunjungan.model.js")(sequelize, Sequelize);
module.exports = db;