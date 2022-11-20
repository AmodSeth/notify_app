const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String,
        required : true
        
    },
    timestamp: {
        type: String,
        default: Date.now()

    },
    complete : {
        type: Boolean,
        default: false
    }
})
//it takes name of db
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;