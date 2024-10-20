const getAllproducts = async (req, res) => {
    res.status(200).json({msg: "Getting Response from API"});
};

const getAllproductsTesting = async (req, res) => {
    res.status(200).json({msg: "Getting Response from TestAPI"});
};

module.exports = {getAllproducts, getAllproductsTesting};