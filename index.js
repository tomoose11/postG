const express = require("express");
const app = express();
const {Client,Pool} = require("pg");

const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"postgres",
    password:"test",
    port:"5432"
});

client.connect();

client.query("CREATE TABLE new2 (id INTEGER, snack TEXT, age INTEGER)",(err)=>{
    if(err){console.log(err);}
    console.log("working");
});

client.query("INSERT INTO new2(id,snack,age) VALUES(1,'Jeff',56)");