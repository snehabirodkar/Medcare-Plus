const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const reviewSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
    },
    {
        timeStamps: true,
    }
)

const doctorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        },
        experience: {
            type: Number,
            required: true,
            min: 2
        },
        phone: {
            type: Number,
            required: true,
            min: 20
        },
        location: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        approved: {
            type: Number
        },
        tokens:[
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ],
        reviews: [reviewSchema],
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timeStamps: true
    }
)

// we are hashing the password here
doctorSchema.pre('save', async function(next){
    // console.log("inside here");
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

// we are generating token
doctorSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token:token })
        await this.save();
        return token;

    } catch(error) {
        console.log(error);
    } 
}

const Doctor = mongoose.model('DOCTOR', doctorSchema);

module.exports = Doctor;