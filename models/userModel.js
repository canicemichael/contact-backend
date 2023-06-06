const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required chief"],
    },
    email: {
      type: String,
      required: [true, "please your email is required chief"],
    },
    password: {
      type: String,
      required: [true, "please add your password chief"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
