"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          firstName: "Master Admin",
          lastName: "lastname",
          email: "masteradmin@test.com",
          password: "1111111111111111111",
          userGroupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: "Admin",
          lastName: "lastname",
          email: "admin@test.com",
          password: "1111111111111111111",
          userGroupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          firstName: "General User",
          lastName: "lastname",
          email: "user@test.com",
          password: "1111111111111111111",
          userGroupId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { ignoreDuplicates: true }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
