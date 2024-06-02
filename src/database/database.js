import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "medicos", // Nombre de la base de datos
  "postgres", // Nombre de usuario
  "1234", // Contraseña
  {
    host: "localhost",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, // Tiempo máximo en milisegundos que el pool intentará obtener la conexión antes de lanzar un error
      idle: 10000, // Tiempo máximo en milisegundos que una conexión puede estar inactiva antes de ser liberada
    },
    logging: false, // Desactiva el registro de las consultas SQL en la consola
  }
);
