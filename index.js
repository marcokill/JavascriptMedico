import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const readData = () => {
  try {
    const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync("./db.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (req, res) => {
  res.send("CRUD DE MEDICOS");
});

app.get("/medicos", (req, res) => {
  const data = readData();
  res.json(data.medics);
});

app.get("/medicos/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const medic = data.medics.find((medic) => medic.id === id);
  res.json(medic);
});

app.post("/medicos", (req, res) => {
  const data = readData();
  const body = req.body;
  const newMedic = {
    id: data.medics.length + 1,
    ...body,
  };
  data.medics.push(newMedic);
  writeData(data);
  res.json(newMedic);
});

app.put("/medicos/:id", (req, res) => {
  const data = readData();
  const body = req.body;
  const id = parseInt(req.params.id);
  const medicIndex = data.medics.findIndex((medic) => medic.id === id);
  data.medics[medicIndex] = {
    ...data.medics[medicIndex],
    ...body,
  };
  writeData(data);
  res.json({ message: "Medico actualizado exitosamente" });
});

app.delete("/medicos/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const medicIndex = data.medics.findIndex((medic) => medic.id === id);
  data.medics.splice(medicIndex, 1);
  writeData(data);
  res.json({ message: "Medico eliminado exitosamente" });
});

app.listen(8000, () => {
  console.log("Servidor en ejecucion en el puerto 8000");
});
