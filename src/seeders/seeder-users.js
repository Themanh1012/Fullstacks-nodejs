'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      //   id: DataTypes.STRING,
    // emailL: DataTypes.STRING ,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // roleid: DataTypes.STRING
     
     await queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
       firstName: 'Dante',
       lastName: 'Nguyen',
       address: 'TPHCM',
       gender: 1,
       typeRole: 'ROLE',
       keyRole: 'R1' ,

       createdAt: new Date(),
        updatedAt: new Date(),
    
    }], {});
   
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
