'use strict';

const db = require("../config/db")

class Question{
  static CreateTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY,
        question TEXT
      )
    `

    console.log("Preparing to create the questions table...")

    return new Promise(function(resolve){
      db.run(sql, function(){
        console.log("...questions table created!")
        resolve("Success")
      })
    })
}


module.exports = Question;
