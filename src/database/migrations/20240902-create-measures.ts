module.exports = {
    up: async (queryInterface: any, Sequelize: any) => {
      await queryInterface.createTable('Measures', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        measure_uuid: {
          type: Sequelize.STRING,
          allowNull: false
        },
        customer_code: {
          type: Sequelize.STRING,
          allowNull: false
        },
        measure_datetime: {
          type: Sequelize.DATE,
          allowNull: false
        },
        measure_type: {
          type: Sequelize.STRING,
          allowNull: false
        },
        measure_value: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        image_url: {
          type: Sequelize.STRING,
          allowNull: false
        },
        has_confirmed: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Measures');
    }
  };
  