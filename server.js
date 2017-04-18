/**
 * Created by vikranth on 18-04-2017.
 */
/*Modules required in this application*/

var express = require('express');
var bodyParser = require('body-parser');
var app =express();
var mongoose = require('mongoose');
/*Configuration*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/client'));

/*mongodb configuration*/
mongoose.connect('mongodb://localhost/products');
var Product =mongoose.model('Product', mongoose.Schema({
    name :{type:String , required: true},
    description:{type:String, required: true},
    price:{type:Number,required: true},
    currency:{type:String, required: true}

}));


/*Routes*/

app.get('/api/products', function (req,res) {
    Product.find(function (err,products) {
        if(err)
            res.send(err);
            //console.log(json(products));

        res.json(products);
    })
});
app.get('/api/products/:id', function (req,res) {

    Product.findOne({_id:req.params.id},function (err,product) {
        if(err)
            res.send(err);
        res.json(product);
    })
});
app.post('/api/products', function (req,res) {
    Product.create(req.body, function (err,products) {
        if(err)
            res.send(err);
        res.json(products);
    })
});
app.delete('/api/products/:id', function (req,res) {
    Product.findOneAndRemove({_id:req.params.id},function (err,product) {
        if(err)
            res.send(err);
        res.json(product);
    })
});
app.put('/api/products/:id', function (req,res) {
    var query ={
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        currency:req.body.currency
    }
    Product.findOneAndUpdate({_id:req.params.id},query,function (err,product) {
        if(err)
            res.send(err);
        res.json(product);
    })
});

app.listen(3000,function () {
    console.log('server is running at 3000')

});
