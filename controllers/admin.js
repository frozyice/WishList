const mongoose = require('mongoose');
const Item = mongoose.model('Item');

exports.getAddItemPage = 
    (req, res) => {
    res.render('admin', {
        pageTitle: "Add New Item",
        path: "/admin"
    });
};

exports.postAddItems = (req, res) => {
    let item = new Item();
    item.name = req.body.itemName;
    
    item.save((error, response) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log(error);            
        }
    });
};

exports.deleteItem = (req, res) => {
    const id = req.params.id;
    Item.findByIdAndRemove(id, function(error){
        if(!error){
            console.log("item deleted");
            res.redirect('/');
        }
    });


};
