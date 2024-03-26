const express = require('express');
const upload = require('./../middlewares/multer')
const routes = express.Router();
const controller = require('./../controllers/movie.controller')

routes.get('/' , controller.getData)
routes.post('/add' ,upload.single('thumbnail'), controller.addData)
routes.put('/edit/:id' ,upload.single('thumbnail'), controller.editData)
routes.delete('/delete/:id' , controller.deleteData)
routes.get('/getone/:id' , controller.getOneData)
routes.get('/uploads/:imgpath' , controller.getImg)

module.exports = routes;