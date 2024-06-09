const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  zip: {
    type: Number,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  }
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: LocationSchema,
  },
}, 
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
