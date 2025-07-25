const express=require('express')
const auth =require('../Middleware/auth')
const productController = require('../Controllers/ProductController')
const UserController = require('../Controllers/UserController')
const route=express.Router()


route.post('/createProduct',productController.createProduct)
route.get('/getAllProducts',productController.getAllProducts)
route.get('/viewProduct/:id',productController.getProductById)
route.put('/updateProduct/:id',productController.updateProduct)
route.delete('/deleteProduct/:id',productController.deleteProduct)

route.post('/register',UserController.register)
route.post('/login',UserController.login)
route.post('/logout',UserController.logout)
route.get('/profile',auth,UserController.getProfile)


module.exports=route