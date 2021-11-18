//import express from 'express'
const express = require('express');
const { copyFileSync } = require('fs');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express()

const port = 5000;
app.use(cors())

app.get('/', (req,res) => {
    console.log(req.body);
    console.log('p')
});



app.get('/countries', (req,res) => {
    let obj = JSON.parse(fs.readFileSync('./countriesDB.json').toString());
    return res.json(obj);
});

app.get('/add', (req, res) => {
    let country = req.query.country;
    let name = req.query.name;
    let obj = JSON.parse(fs.readFileSync('./countriesDB.json').toString());
    obj = obj.countries;
    console.log('obj', obj);
    if (country && name) {
        for (let count of obj) {
            if (count.name == country) {
                console.log('beforeadd', count);
                count.to = [...count.to, name];
                console.log('afteradd', count);
            }
        }
    }
    fs.writeFileSync('./countriesDB.json', JSON.stringify({countries: obj}, null, 10));
    return res.json(obj);
})

app.get('/delete', (req, res) => {
    let country = req.query.country;
    let name = req.query.name;
    let obj = JSON.parse(fs.readFileSync('./countriesDB.json').toString());
    obj = obj.countries;
    console.log('obj', obj);
    if (country && name) {
        for (let count of obj) {
            if (count.name == country) {
                console.log('beforeadd', count);
                //count.to = [...count.to, name];
                count.to = count.to.filter(el => el != name);
                console.log('afteradd', count);
            }
        }
    }
    fs.writeFileSync('./countriesDB.json', JSON.stringify({countries: obj}, null, 10));
    return res.json(obj);
})

app.get('/image', (req, res) => {
    let name = req.query.name;
    //let img = fs.readFileSync(`./bpla/${name}.jpg`);
    return res.sendFile(path.resolve(`./bpla/${name}.jpg`));

})

app.listen(port, console.log('Работает на 5000'));