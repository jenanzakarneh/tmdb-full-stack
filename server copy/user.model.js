const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    wishlist: { type: Array },
    watched: { type: Array },
  },
  { collection: "user-data" }
);

module.exports = mongoose.model("User", userSchema);

// module.exports = User;
