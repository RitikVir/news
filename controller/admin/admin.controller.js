const express=require("express");
const Client= require("../../model/client.model");
const Login=require("../../model/login.model");
const password=require("../../playground/password.playground");
const Writer=require("../../model/writer.model");

module.exports = {
    addClient: (req,res)=>{
        
        let clientInfo=new Client(req.body);
        clientInfo.save((err,data)=>{
            if(err) throw err;
            
            password.generatePassword((pass)=>{
                password.encryptPassword(pass,(encryptedPassword)=>{
                    let loginInfo= new Login();
                    loginInfo.phoneNumber=req.body.phoneNumber;
                    loginInfo.userId=data._id;
                    loginInfo.role="client";
                    loginInfo.password=encryptedPassword;                    
                    loginInfo.save((nerr,loginData)=>{
                        if(nerr) throw nerr;
                        res.status(200).send({status:true});
                    });
                });
            });
        });
    },
    addWriter: (req,res)=>{
        let writerInfo= new Writer(req.body);
        writerInfo.addedOn=Date.now();
        
        writerInfo.save((err,data)=>{
            if(err) throw err;

            password.generatePassword((pass)=>{
                password.encryptPassword(pass,(encryptedPassword)=>{
                    let loginInfo=new Login();
                    loginInfo.phoneNumber= req.body.phoneNumber;
                    loginInfo.userId=data._id;
                    loginInfo.role="writer";
                    loginInfo.password=encryptedPassword;
                    loginInfo.save((nerr,loginData)=>{
                        if(nerr) throw nerr;
                        res.status(200).send({status:true});
                    });
                });
            });
        });
    }
}
