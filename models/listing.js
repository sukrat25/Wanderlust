const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new Schema({  //made a schema
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        // default: "https://captainfi.com/wp-content/uploads/2022/08/Unsplash-images-2-1024x683.jpg",
        // type: String,
        // set: (v)=> v==="" ? "https://captainfi.com/wp-content/uploads/2022/08/Unsplash-images-2-1024x683.jpg": v,

        url: String,
        fileName: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

//delete route post middle ware
listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema); //creating model
module.exports = Listing;           //exporting model to app.js
