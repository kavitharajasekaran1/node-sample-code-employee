'use strict';

const user = require('../models/sample');  
// const user = require('../models/fetchdata');

exports.sample= (employeename,dateofjoin,salary) => new Promise((resolve, reject) => {

    const newUser = new user({

     employeename:  employeename,
    dateofjoin: dateofjoin , 
    salary: salary
    });
    newUser
        .save()
        .then(() => resolve({
            status: 201,
            message: 'Please verify your emailid and phone no'
        }))
        .catch(err => {

            if (err.code == 11000) {

                reject({
                    status: 409,
                    message: 'User Already Registered !'
                });

            } else {

                reject({
                    status: 500,
                    message: 'Internal Server Error !'
                });
            }
        });
});
