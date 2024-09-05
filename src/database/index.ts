import { Sequelize, DataTypes, Model } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST!,
  dialect: 'mysql',
  port: parseInt(process.env.DB_PORT!, 10),
});

class Measure extends Model {}

Measure.init({
  measure_uuid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  customer_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  measure_datetime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  measure_type: {
    type: DataTypes.ENUM('WATER', 'GAS'),
    allowNull: false,
  },
  measure_value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  has_confirmed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'Measure',
  tableName: 'measures',
  timestamps: false,
});

// Teste de Conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

// Sincronizar o modelo com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Tabela Measures sincronizada com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar com o banco de dados:', error);
  });

export { Measure, sequelize };
