const validateBook = (req,res,next)=>{
    const {name, author, publishedYear} = req.body;
    if (!name || !author || !publishedYear) {
        return res.status(400).json({message:"All fields are required"});
    }

    if (
      typeof publishedYear !== "number" ||
      publishedYear.toString().length !== 4
    ) {
        return res
          .status(400)
          .json({
            message: "Invalid publishedYear. Must be a 4-digit number.",
          });
    }
    next();
}

module.exports = validateBook;