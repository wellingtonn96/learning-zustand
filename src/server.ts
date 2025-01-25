import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.status(200).json({ message: "hello world" });
});

app.get("/new-route", (request, response) => {
  return response.status(200).json({ message: "hello world" });
});

app.post("/courses", (request, response) => {
  const body = request.body;
  return response.status(200).json({ body });
});

app.listen(3333, () => console.log("Server is running"));
