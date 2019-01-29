const express = require('express');
//import express from 'express';


const app = express();

app.get('/', (req, res) => {
    app.send({ hi: 'ironcarbon' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);

//localhost:5000