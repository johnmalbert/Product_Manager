const { Product } = require('../models/product');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (req, res) => {
    console.log("Creating a product in controller");
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.getProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id }, req.body, {new: true})
        .then(product => res.json({message: "success", results: product}))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    console.log(req.body);
    Product.remove({_id: req.params.id})
        .then(data => res.json({message: "success", results: data}))
        .catch(err => res.json({message: "Error", errors: err}))
}
// module.exports.updatePerson = (request, response) => {
//     Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
//         .then(updatedPerson => response.json(updatedPerson))
//         .catch(err => response.json(err))
// }
