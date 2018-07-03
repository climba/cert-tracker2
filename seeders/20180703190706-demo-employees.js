'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Employees', [
        {
        first_name: 'Mike',
        last_name: 'White',
        email: 'demo@demo.com',
        phone_number: '510 778 3900',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        first_name: 'Fred',
        last_name: 'Bloggs',
        email: 'demo@demo.com',
        phone_number: '510 771 3900',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employee', null, {});
  }
};