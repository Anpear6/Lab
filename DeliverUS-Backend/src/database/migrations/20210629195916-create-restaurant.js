module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // TODO: Include the rest of the fields of the Restaurants table

      name: {
        allowNull: false,
        type: Sequelize.STRING
      },

      description: {
        allowNull: true,
        type: Sequelize.STRING
      },

      address: {
        allowNull: false,
        type: Sequelize.STRING
      },

      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },

      url: {
        allowNull: true,
        type: Sequelize.STRING
      },

      shippingCosts: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },

      email: {
        allowNull: true,
        type: Sequelize.STRING
      },

      phone: {
        allowNull: true,
        type: Sequelize.STRING
      },

      logo: {
        allowNull: true,
        type: Sequelize.STRING
      },

      heroImage: {
        allowNull: true,
        type: Sequelize.STRING
      },

      averageServiceMinutes: {
        type: Sequelize.DOUBLE,
      },

      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['online', 'offline', 'closed', 'temporarily closed'],
        defaultValue: 'offline'     // Para que todos los restaurantes empiecen offline si no se le dice lo contrario.
      },

      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        }
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
