//MONGOOSE
const mongoose = require("mongoose");

//Schema Definition
//name - String, createdDate which is required(gets its data from Date.now() when created), endDate
//description which is required, lists of users assigned to the bug and the project it belong to.
const projectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },    
    description:{
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    purpose:{
        type: String,
        required: true,
    },
    live: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    }
});

//setSchema
projectSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
});

//export
module.exports = mongoose.model("Project", projectSchema);