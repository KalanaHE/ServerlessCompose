'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Permissions',
            [
                {
                    id: 1,
                    name: 'full_access_to_system',
                    description: 'full access to the system',
                    userGroupId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: 'view_admin_home',
                    description: 'view admin home',
                    userGroupId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    name: 'view_user_home',
                    description: 'view user home',
                    userGroupId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    name: 'view_user_profile',
                    description: 'view user profile',
                    userGroupId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            { ignoreDuplicates: true }
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Permissions', null, {});
    },
};
