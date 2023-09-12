'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'UserGroups',
            [
                {
                    id: 1,
                    name: 'master admin',
                    description: 'Master Admin Role',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: 'admin',
                    description: 'Admin Role',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    name: 'general user',
                    description: 'General User Role',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            { ignoreDuplicates: true }
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('UserGroups', null, {});
    },
};
