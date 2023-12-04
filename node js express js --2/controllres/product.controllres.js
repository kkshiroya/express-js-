const { productService } = require("../services");

const getproduct = async (req, res) => {
    const product = await productService.getproduct();
    
    res.status(200).json({
        success: true,
        massage: "data get successfully", 
        data: product,
    });
    console.log(product);
};

module.exports = { getproduct };