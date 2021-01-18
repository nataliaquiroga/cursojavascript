const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public')
app.use(express.static('publicPath'));
app.listen(3000, () =>
   console.log('Servidor corriendo en el puerto 3000')
);
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/babbage.html'));
});
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/berners-lee.html'));
});
app.get('/clarke', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/clarke.html'));
});
app.get('/hamilton', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hamilton.html'));
});
app.get('/hopper', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hopper.html'));
});
app.get('/lovelace', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/lovelace.html'));
});
app.get('/turing', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/turing.html'));
});


