const employee = require('./functions/employee');

var cors = require('cors');
var mongoose = require('mongoose');

var Promises = require('promise');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');

module.exports = router => {

    
 
     router.post('/employee', cors(), (req, res) => { 
 
         const employeename = req.body.employeename;
         console.log(employeename);
         const dateofjoin = req.body.dateofjoin;
         console.log(dateofjoin);
         const salary = parseInt(req.body.salary);
         console.log(salary);
        //  const dateofbirth = req.body.dateofbirth;
        //  console.log(dateofbirth);
        //  const email = req.body.email;
        //  console.log(email);
        //  const password = req.body.password;
        //  console.log(password);
        //  const retypepassword = req.body.retypepassword;
        //  console.log(retypepassword);
        //  const usertype = req.body.usertype;
        //  console.log(usertype);
        //  var  userId = "";
        //  var possible = "0123456789674736728367382772898366377267489457636736273448732432642326734"
        //  for (var i = 0; i < 3; i++)
        //      userId += (possible.charAt(Math.floor(Math.random() * possible.length))).toString();
        //  console.log("userId" + userId)
 
 
         if (!employeename|| !dateofjoin || !salary) {
 
             res
                 .status(400)
                 .json({
                     message: 'Invalid Request !'
                 });
 
         } else {
 
            employee
                 .sample(employeename,dateofjoin,salary)
                 .then(result => {
 
                     res.send({
                         "message": "employee name is posted successfully",
                         "status": true,
 
 
                     });
 
 
                 })
                 .catch(err => res.status(err.status).json({
                     message: err.message
                 }).json({
                     status: err.status
                 }));
         }
     });
 
    } 