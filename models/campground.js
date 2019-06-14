var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({           //make an object or structure for JavaScript or Database
    name: String,
    price: Number,
    image: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username: String
    },
    comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);