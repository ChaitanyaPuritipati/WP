//To read file
const fs = require('fs');
var products = [];
fs.readFile('./catalog.json', 'utf8', function(err, data) {
    if(err) throw err;
    let rawdata = data;
    const jsondata = JSON.parse(rawdata);
    products = jsondata.products;
    // console.log(products);
});
module.exports = function(app) {
    //To retrieve the data
    app.get('/products', function(req, res){
        res.render('productcatalog', {items : products});
    });

    //to update the data

    app.post('/products', function(req, res) {
        // console.log(req.body);
        res.send("hello");
    });
};