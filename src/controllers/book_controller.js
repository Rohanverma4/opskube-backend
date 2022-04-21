const express = require("express");
const Book = require("../models/book_model.js")

const router = express.Router()

router.get('', async (req,res) => {
    try{
        const allBook = await Book.find().lean().exec();
        res.status(201).json(allBook)
    }catch(err){
        console.log(err)
    }
})


router.post('/', async (req,res) => {

    const newBook = new Book({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        price: req.body.price,
    })
    try{
        const savedBook = await newBook.save();
        res.status(201).json(savedBook)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.patch('/:id', async (req,res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id,req.body, {
            new:true,
        })
        res.status(201).json(updatedBook)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req,res) => {
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        res.status(201).json(deletedBook)
    } catch(err) {
        res.status(500).json(err)
    }
})
module.exports = router;