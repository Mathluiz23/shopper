module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('measures', [
        {
          measure_uuid: 'uuid-1',
          customer_code: '12345',
          measure_datetime: new Date(),
          measure_type: 'WATER',
          measure_value: 100,
          image_url: 'https://example.com/image1.png',
          has_confirmed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          measure_uuid: 'uuid-2',
          customer_code: '67890',
          measure_datetime: new Date(),
          measure_type: 'GAS',
          measure_value: 200,
          image_url: 'https://example.com/image2.png',
          has_confirmed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('measures', null, {});
    },
  };
  