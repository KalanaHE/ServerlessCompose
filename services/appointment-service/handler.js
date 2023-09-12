"use strict";

module.exports.getData = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "appointment-service: Test Data",

      // You can replace this with actual data from your MySQL database
    }),
  };
};
