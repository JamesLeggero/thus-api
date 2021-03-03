'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users', [
        {
          username: 'John Doe',
          email: 'john@johndoe.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'Jane Doe',
          email: 'jane@janedoe.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'Tim Doe',
          email: 'tim@timdoe.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], 
    {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
