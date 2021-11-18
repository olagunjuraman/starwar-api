"use strict";

const logger = require('winston');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Comments", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_ip_address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        text: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        movieId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Movies',
            key: 'id',
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .catch((error) => logger.error(error));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface
    .dropTable('Comments')
    .catch(error => logger.error(error));
  },
};

