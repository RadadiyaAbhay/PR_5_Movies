const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1:27017/movie`).then(()=>{
    console.log("connect to database success")
}).catch((err) =>{
    console.log(err);
})

module.exports = mongoose;