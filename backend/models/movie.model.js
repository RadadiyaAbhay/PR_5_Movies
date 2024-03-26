const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: { type: String },
    director: { type: String},
    releaseDate: { type: String },
    thumbnail : {type:String},
    category : {type :Array},
    cast : {type : Array},
    movieTime :{ type :String},
    description : {type : String},
    rating : {type : Number}
} , {
    timestamps : true
})

const movieModel = mongoose.model( 'movie', movieSchema );
module.exports = movieModel