const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wishList', { useNewUrlParser: true, useUnifiedTopology: true });
require('./item');