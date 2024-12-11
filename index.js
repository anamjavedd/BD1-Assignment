const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);

  let result = cartTotal + newItemPrice;

  res.send(result.toString());
});

app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember === 'true';
  let finalPrice;

  if (isMember) {
    finalPrice = cartTotal - cartTotal * (10 / 100);
  } else {
    finalPrice = cartTotal;
  }

  res.send(finalPrice.toString());
});

app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let taxCalculated = cartTotal * (5 / 100);

  res.send(taxCalculated.toString());
});

app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  let estimateDelivery;

  if (shippingMethod === 'express') {
    estimateDelivery = distance / 100;
  } else {
    estimateDelivery = distance / 50;
  }

  res.send(estimateDelivery.toString());
});

app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shippingCost = weight * distance * 0.1;

  res.send(shippingCost.toString());
});

app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = 2 * purchaseAmount;
  res.send(loyaltyPoints.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
