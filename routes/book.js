import { verifyAdmin } from './auth.js';
import express from "express";
import { Book } from '../models/Book.js';

const router = express.Router();

router.post('/add', verifyAdmin, async (req, res) => {
    try {
        const { name, author, imageUrl } = req.body;
        const newbook = new Book({
            name,
            author,
            imageUrl
        })
        await newbook.save()
        return res.json({ added: true })
    } catch (err) {

        return res.json({ error: err.message })
    }
})

router.get('/books', async (req, res) => {
    try {
        const books = await Book.find()
        return res.json({ books })
    } catch (err) {
        return res.json({ err })
    }
})

router.get('/book/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const books = await Book.findById({ _id: id })
        return res.json(books)
    } catch (err) {
        return res.json(err)
    }
})

router.patch('/book/:id', verifyAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        const { name, author, imageUrl } = req.body;

        const updatedBook = await Book.findByIdAndUpdate({ _id: id }, { name, author, imageUrl }, { new: true });

        if (updatedBook) {
            return res.json({ updated: true, book: updatedBook });
        } else {
            return res.json({ error: 'Book not found' });
        }
    } catch (err) {
        return res.json({ error: err.message });
    }
});


router.delete('book/:id', async (req, res) => {
    try{
        const id=req.params.id;
        const book=await Book.findByIdAndDelete({_id:id})
        return res.json({deleted:true,book})
    }catch(err)
    {
        return res.json({error:err.message})
    }
})

router.delete('/book/:id', verifyAdmin, async (req, res) => {
    try {
        const id = req.params.id;

        const deletedBook = await Book.findByIdAndDelete({ _id: id });

        if (deletedBook) {
            return res.json({ deleted: true, book: deletedBook });
        } else {
            return res.json({ error: 'Book not found' });
        }
    } catch (err) {
        return res.json({ error: err.message });
    }
});

export { router as bookRouter }