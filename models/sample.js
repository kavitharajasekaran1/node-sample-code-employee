'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeepageSchema = mongoose.Schema({

    employeename: String,
    dateofjoin: String, 
    salary: String,
    
     
});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://kavitharajasekaran:Pavankumar2007@ds016058.mlab.com:16058/employees', {
    useMongoClient: true
    
});



module.exports = mongoose.model('sample', employeepageSchema);