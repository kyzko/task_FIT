let mongoose = require("mongoose");

module.exports = mongoose.model('Comment',{
    name: {
        type: String,
        required: true,
    },
    comment:  {
        type: String,
        required: true,
    },
    data: Object
});