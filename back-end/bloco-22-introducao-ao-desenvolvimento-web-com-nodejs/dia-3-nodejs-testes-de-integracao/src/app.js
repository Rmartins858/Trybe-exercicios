// src/app.js

const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacaoTrybe.findChocolateByName(name);
  res.status(chocolates.length === 0 ? 404 : 200)
    .json(chocolates);
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const updatedChocolate = await cacaoTrybe.updateChocolate(Number(id), { name, brandId });

  if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });
  res.status(404).json({ message: 'chocolate not found' });
});
module.exports = app;