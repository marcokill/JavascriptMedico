const app = require('./app');

const PORT = process.env.PORT || 8000;
const serverMessage = `Servidor en ejecución en el puerto ${PORT}`;

app.listen(PORT, () => {
  console.log(serverMessage);
});
