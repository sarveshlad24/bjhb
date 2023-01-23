const express = require("express");
const { getusers, getUserById, createUser, updateUser } = require("../controller/emp-controller");
const  route = express()



route.get("/get-employees", (req, res) => {
    getusers(req,res)
  });

  // get data by ID
route.get('/get-employees/:id', (req,res) => {
    // console.log(req.params.id)
    getUserById(req,res)
  })
  
  //create data
  route.post('/create-employees', (req, res) => {
    createUser(req,res)
  });
  
  //update data 
  route.put('/Update-employees/:id', (req, res) => {
    console.log(req, "updated data")
    updateUser(req,res)
  })

  route.delete('/delete-employee/:id', (req,res) => {
    // console.log(req.params.id)
    getUserById(req,res)
  })

  module.exports =route