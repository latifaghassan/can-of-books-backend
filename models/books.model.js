"use strict";

const mongoose = require("mongoose");
/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/

// Here we are creating a new schema obj, which will be used later on to generate the model
const booksSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  status: { type: String },
});

// schema have preporities abd behaviors
// describe how the model look like
// it describe how the data look like when we model them .
// we can make their type pf data : string , Number

// const myBookModel = new mongoose.model ('books', booksSchema)

module.exports = booksSchema;
