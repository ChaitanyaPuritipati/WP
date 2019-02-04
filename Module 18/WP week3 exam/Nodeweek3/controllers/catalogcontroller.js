//To read file
const fs = require('fs');
var products = [];
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false});
fs.readFile('./catalog.json', 'utf8', function(err, data) {
    if(err) throw err;
    let rawdata = data;
    const jsondata = JSON.parse(rawdata);
    products = jsondata.products;
});
module.exports = function(app) {
    //To retrieve the data
    app.get('/', function(req, res){
        res.render('productcatalog', {items : products});
    });
    app.get('/products/add', function(req, res){
        var html = fs.readFileSync('./views/editform.html', 'utf8')
        res.send(html);
    });

    app.post('/products/add', urlencodedParser, function(req,res) {
        products.push({
            "title": req.body.title,
            "description" : req.body.description,
            "quantity": req.body.quantity,
            "image": req.body.image,
        });
        let data = JSON.stringify({"products" : products});
        fs.writeFileSync('./catalog.json', data);
        res.redirect('/');
    });
    // //to update the data

    app.post('/products/:id', urlencodedParser, function(req, res) {
        products[req.params.id].title =  req.body.title;
        products[req.params.id].description =  req.body.description;
        products[req.params.id].quantity =  req.body.quantity;
        products[req.params.id].image = req.body.image;
        var updatedproducts = {products};
        let data = JSON.stringify(updatedproducts);
        fs.writeFileSync('./catalog.json', data);
        res.redirect('/');
    });

    //to delete the data

    app.delete('/products/:id', urlencodedParser, function(req, res) {
        if (req.params.id > -1) {
            products.splice(req.params.id, 1);
            var updatedproducts = {"products": products};
            let data = JSON.stringify(updatedproducts);
            fs.writeFileSync('./catalog.json', data);
            res.json(updatedproducts);
        }
        
    })
};