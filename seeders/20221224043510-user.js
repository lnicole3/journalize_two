'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Zoe',
        email: 'Zoe@me.com',
        password: 123 
      },
      {
        name: 'Dom',
        email: 'Dominic@me.com',
        password: 123 
      },
      {
        name: 'Jay',
        email: 'Jayla@me.com',
        password: 123 
      },
    ]
  )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
