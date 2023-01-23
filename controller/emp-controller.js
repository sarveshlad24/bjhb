// import { nanoid } from 'nanoid'
const { v4: uuidv4 } = require('uuid');
const { connection } = require("../Schema/db");
// import { nanoid } from 'nanoid'
// const {nanoid} = require("nanoid");

const getusers = (req,res)=>{
    connection.query('SELECT * FROM Users', (err, results) => {
        if (err) throw err;
        return res.json(results);
      });
}

const getUserById = (req,res)=>{
    let empId = req.params.id;
    const emps = ` SELECT * FROM Users where id =${empId}`;
    connection.query(emps, (err, results) => {
      if (err) {
        return err;
      }
      if(results.length>0){
       return res.send({
          message:"Get data by ID",
          data:results
        })
      }else{
       return res.send({
          message:"No data found"
        })
      }
      
    })
}

const createUser = (req,res)=>{
    // const id = nanoid();
    const id = uuidv4();
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const designation = req.body.designation;
    const mobile_no = req.body.mobile_no;

    connection.query(
      'INSERT INTO Users (id,fname, lname, email, designation , mobile_no) VALUES (?, ?,?,?,?,?)',
      [id,fname, lname, email, designation, mobile_no],
      (err, results) => {
        if (err) {
         return res.status(500).json({ message: err.message });
        } else {
         return   res.status(201).json({ message: 'Employee created successfully' });
        }
      }
    );
}

const updateUser = (req,res)=>{
    let empId = req.params.id;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const designation = req.body.designation;
    const mobile_no = req.body.mobile_no;

  
    let empData = ` UPDATE Users SET fname = "${fname}", lname = "${lname}", email="${email}", designation="${designation}", mobile_no="${mobile_no}" where id = "${empId}" `;
  
    connection.query(empData, (err, results) => {
      if (err) {
        console.log(err);
      }
      return res.send({
        message: "Employee Data updated successfully",
        data: results
      })
    })
}

const deleteUserById = (req,res)=>{
    let empId = req.params.id;
    let empData = ` DELETE FROM Users where id = '${empId}' `;
    connection.query(empData,(err,results)=>{
        if(err){
            console.log(err);
        }
        res.send({
            message: "Employee deleted successfully",
            // data: results
        })
    }) 
}
 module.exports = { getusers, getUserById, createUser, updateUser, deleteUserById}