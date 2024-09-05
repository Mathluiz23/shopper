import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import sequelize from './database/database';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Tabelas sincronizadas com o banco de dados.');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((err) => {
  console.error('Erro ao sincronizar com o banco de dados:', err);
});





