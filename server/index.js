const express = require('express');
//import express from 'express';


const app = express();

app.get('/', (req, res) => {
    app.send({ hi: 'ironcarbon' });
});

app.listen(5000);

//localhost:5000