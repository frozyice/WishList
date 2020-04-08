const Item = require('../models/item');

exports.getAddItemPage = 
    (req, res) => {
    res.render('admin', {
        pageTitle: "Add New Item",
        path: "/admin"
    });
}

exports.postAddItems = (req, res) => {
    console.log(req.body.itemName);
    //products.push({title: req.body.title});
    const item = new Item(req.body.itemName);
    item.saveItem();
    res.redirect('/');
}
