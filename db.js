const Sequelize = require("sequelize");
const config = require("./config.json");

// Initialize database connection for 'appointment_db'
const appointment_db = new Sequelize(
  config.appointment_db.database,
  config.appointment_db.username,
  config.appointment_db.password,
  {
    host: config.appointment_db.host,
    dialect: config.appointment_db.dialect,
  }
);

// Initialize database connection for 'doctor_db'
const doctor_db = new Sequelize(
  config.doctor_db.database,
  config.doctor_db.username,
  config.doctor_db.password,
  {
    host: config.doctor_db.host,
    dialect: config.doctor_db.dialect,
  }
);

module.exports = {
  appointment_db,
  doctor_db,
};
