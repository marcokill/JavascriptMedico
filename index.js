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
  res.send("Welcome to my first API with Node js!");
});

app.get("/medics", (req, res) => {
  const data = readData();
  res.json(data.medics);
});

app.get("/medics/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const medic = data.medics.find((medic) => medic.id === id);
  res.json(medic);
});

app.post("/medics", (req, res) => {
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

app.put("/medics/:id", (req, res) => {
  const data = readData();
  const body = req.body;
  const id = parseInt(req.params.id);
  const medicIndex = data.medics.findIndex((medic) => medic.id === id);
  data.medics[medicIndex] = {
    ...data.medics[medicIndex],
    ...body,
  };
  writeData(data);
  res.json({ message: "Medic updated successfully" });
});

app.delete("/medics/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const medicIndex = data.medics.findIndex((medic) => medic.id === id);
  data.medics.splice(medicIndex, 1);
  writeData(data);
  res.json({ message: "Medic deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
