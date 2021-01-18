const express = require("express");
var path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () =>
   console.log('Servidor corriendo en el puerto 3000')
);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});



