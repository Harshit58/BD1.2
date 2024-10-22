const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

function getWelcomeFunction() {
  return 'Welcome to our service';
}

function greetUser(name) {
  return `Hello ${name}!`;
}

function checkPasswordLength(password) {
  if (password.length > 15) {
    return 'password is strong';
  } else {
    return 'password is weak';
  }
}

function addNumber(num1, num2) {
  return num1 + num2;
}

function checkSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed === 'true') {
    return `${username} is subscribed`;
  } else {
    return `${username} is not subscribed`;
  }
}

function getDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - (price * discount) / 100;
  let finalAmount = discountedPrice + (discountedPrice * tax) / 100;
  return finalAmount;
}

function getGreetingMessage(age, gender, name) {
  return `Hello, ${name}! You are a ${age} year old ${gender}`;
}

function totalExerciseTme(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeFunction());
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  res.send(greetUser(name));
});

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordLength(password));
});

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(addNumber(num1, num2).toString());
});

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(checkSubscriptionStatus(username, isSubscribed));
});

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount).toString());
});

app.get('/personlized-greeting', (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getGreetingMessage(age, gender, name));
});

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax).toString());
});

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(totalExerciseTme(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
