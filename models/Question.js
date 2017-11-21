'use strict';

const db = require("../config/db")


class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `
        CREATE TABLE IF NOT EXISTS questions (
          id INTEGER PRIMARY KEY,
          content TEXT
        )`
      console.log("Preparing to create the questions table...")

      db.run(sql, function(){
        console.log("...questions table created!")
        resolve("Success")
      })
    })
  }

}


module.exports = Question;
