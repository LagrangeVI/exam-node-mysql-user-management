"use strict";
const { Op } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Juan",
          last_name: "Cruz",
          address: "123 Street",
          post_code: "1234",
          contact_number: "09876543211",
          email: "juancruz@email.com",
          username: "juan77",
          password: "password",
          createdAt: new Date()
        },
        {
          first_name: "Pedro",
          last_name: "Gaaz",
          address: "987 Avenue",
          post_code: "1122",
          contact_number: "09999999999",
          email: "pedro66@email.com",
          username: "pedro99",
          password: "password",
          createdAt: new Date()
        },
        {
          first_name: "Tom",
          last_name: "Abad",
          address: "block 3 lot 1",
          post_code: "999",
          contact_number: "09999991312",
          email: "tomabad@email.com",
          username: "tommy22",
          password: "password",
          createdAt: new Date()
        },
        {
          first_name: "Pepito",
          last_name: "Manaloto",
          address: "Manila",
          post_code: "768",
          contact_number: "09984569131",
          email: "pepito@email.com",
          username: "pepito69",
          password: "password",
          createdAt: new Date()
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('users', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", {
      [Op.or]: [
        { username: "juan77" },
        { username: "pedro99" },
        { username: "tommy22" },
        { username: "pepito69" },
      ],
    });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
