const mongoose = require('mongoose');
const Item = mongoose.model('Item');

exports.getIndex = (req, res) => {
    Item.find((error, items) =>{
        if(!error){
            res.render('index',
            {
                items: items,
                pageTitle: 'Wish List',
                path: '/'
            });
        } else {
            console.log("db error");
        }
    });
};
