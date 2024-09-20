

let adminController = (req,res)=>{
    res.status(200).json({
        message:"Welcome to admin route"
    })
}

module.exports= {adminController} // default export