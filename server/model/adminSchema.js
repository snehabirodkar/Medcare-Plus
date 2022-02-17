const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    tokens:[
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

// we are hashing the password here
adminSchema.pre('save', async function(next){
    console.log("inside here");
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }if(this.isModified('cpassword')) {
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})

// we are generating token
adminSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token:token })
        await this.save();
        return token;

    } catch(error) {
        console.log(error);
    } 
}

const Admin = mongoose.model('ADMIN', adminSchema);

module.exports = Admin;