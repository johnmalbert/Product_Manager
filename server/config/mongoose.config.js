const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB Connected!"))
    .catch(err => console.log("Error connection to db."))