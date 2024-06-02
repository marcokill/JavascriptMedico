import app from "./app.js";
import { sequelize } from "./database/database.js";
import './models/Project.js';

async function main() {
  try {
    await sequelize.sync(); // Sincroniza la base de datos sin eliminar y recrear las tablas
    console.log('Base de datos sincronizada');

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar la aplicación:', error);
  }
}

main();

