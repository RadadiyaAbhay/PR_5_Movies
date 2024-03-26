const movieModel = require('./../models/movie.model');
const path = require('path');
const fs = require('fs')
const getData = async (req, res) => {
    const data = await movieModel.find();
    console.log('data get Successfully');
    res.status(200).json({ data });

}

const addData = async (req, res) => {
    try {
        const { title, director, releaseDate, category, cast, description, rating, movieTime } = req.body;
        let thumbnail = req.file ? req.file.filename : null;
        let arrayCast = cast.split(",");
        let arrayCategory = category.split(",");
        const data = new movieModel({
            title,
            director,
            releaseDate,
            thumbnail,
            category : arrayCategory,
            cast :arrayCast,
            description,
            rating,
            movieTime
        });
        await data.save();
        console.log("Data Save Successfully");
        res.status(201).json({ message: "Movie Saved Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
const editData = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, director, releaseDate, category, cast, description, rating, movieTime } = req.body;
        const movie = await movieModel.findOne({ _id: id });
        let thumbnail = req.file ? req.file.filename : null;

        
        let arrayCast = cast.split(",");
        let arrayCategory = category.split(",");
        if(thumbnail == null){
            thumbnail = movie.thumbnail
        }else{
            try {
                fs.unlinkSync(`./uploads/${movie.thumbnail}`)
            } catch (err) {
                console.log("img not delete");
            }
        }
        console.log(thumbnail , req.body);

        await movieModel.findByIdAndUpdate(id, {
            title,
            director,
            releaseDate,
            thumbnail,  
            category : arrayCategory,
            cast :arrayCast,
            description,
            rating,
            movieTime
        })
        console.log("Data Updated Successfully");
        res.status(201).json({ message: "Movie Updated Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error"});
    }
}
const deleteData = async (req, res) => {

    const { id } = req.params;
    const movie = await movieModel.findOne({ _id: id })
    try {
        fs.unlinkSync(`./uploads/${movie.thumbnail}`)
    } catch (err) {
        console.log("img not delete");
    }
    await movieModel.deleteOne({ _id: id });
    console.log("Movie Delete Successfully");
    res.status(200).json({ message: "Delete Successfully" })
}
const getOneData = async (req, res) => {
    const { id } = req.params;
    const data = await movieModel.findOne({ _id: id });
    console.log("Movie Get Successfully");
    res.status(200).json({ data });
}

const getImg = async (req, res) => {
    const { imgpath } = req.params;
    const imagePath = path.join(__dirname, '../uploads', imgpath);
    res.sendFile(imagePath);
}

module.exports = { getData, addData, editData, deleteData, getOneData, getImg };