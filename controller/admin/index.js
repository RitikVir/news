const express= require('express');
const app= express();
const adminController=require("./admin.controller");

app.post("/addclient",adminController.addClient);

app.post("/addwriter",adminController.addWriter);

module.exports=app;