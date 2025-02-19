const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Lütfen geçerli bir e-posta adresi girin",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength:8,
    maxLength: 20
  },
  role: {
    type:String,
    enum:["admin","superadmin","user","editor"],
    default: "user"
  },
  isActive: {
    type:Boolean,
    default:true
  },
  lastLogin: {
    type:Date,
    default: null,
  }
}, {timestamps:true});

// **Şifre hashleme işlemi**
userSchema.pre("save", async function (next){
  if(!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await await bcrypt.hash(this.password,salt);
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  if (!this._update.password) return next(); // Eğer şifre güncellenmiyorsa devam et
  const salt = await bcrypt.genSalt(10);
  this._update.password = await bcrypt.hash(this._update.password,salt);
  next();

})

userSchema.methods.comparePassword = async function (candidatePassword){
  return await bcrypt.compare(candidatePassword, this.password);
}
module.exports = mongoose.model("User", userSchema, "users");
