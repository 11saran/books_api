let books = [];  //For in-memory storage of books


//Get all books
const getAllBooks = (req,res)=>{
    try {
        if (books.length === 0) {
            return res.status(404).json({message:"No books found"});
        }
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({error:"Internal Server Error"});
    }
}




module.exports = {
    getAllBooks
}