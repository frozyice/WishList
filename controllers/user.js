const Item = require('../models/item');

exports.getIndex = (req, res) => {
    Item.getItems((items)=>{
        res.render('index', {
        pageTitle: 'Wish List',
        items: items,
        path: '/'
        });
    });
};
