"use strict";

const User = require("../../models/appointmentdb/user");

module.exports.getData = async (event, context) => {
  const user = await User.findOne({
    where: { id: 1 },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "appointment-service: Test Data",
      data: user,
      // You can replace this with actual data from your MySQL database
    }),
  };
};
