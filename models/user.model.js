"use strict";

const mongoose = require("mongoose");
const booksSchema = require("./books.model");

/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/

// Here we are creating a new schema obj, which will be used later on to generate the model

// SCHEMA

const userSchema = new mongoose.Schema({
  email: { type: String },
  books: [booksSchema], // array of books
});

// MODEL

// generate the model based on the schema
// the seed function will be envoked only once.
const userModel = mongoose.model("users", userSchema);

// SEED FUNCTION

// it is used to model and
// create 3 books for each user.
const seedUserData = () => {
  const newUser = new userModel({
    email: "tamim.hamoudi@gmail.com",
    books: [
      {
        name: "Wuthering Heights ",
        descrition:
          "A poor boy of unknown origins is rescued from poverty and taken in by the Earnshaw family where he develops an intense relationship with his young foster sister, Cathy.",
        status: "Puplished",
      },
      {
        name: "The Catcher in the Rye",
        descrition:
          "life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. ",
        status: "Puplished",
      },
      {
        name: " Pride and Prejudice",
        descrition:
          "follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. ",
        status: "Puplished",
      },
    ],
  });

  console.log(newUser);

  newUser.save();
};

module.exports = seedUserData;
