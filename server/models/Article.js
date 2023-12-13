const {Schema, model, Types} = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const articleSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    content: {type: String, required: true},
    authorName: {type: String, required: true},
    author: {type: Types.ObjectId, ref: "User"},
    usersLiked: {type: [Types.ObjectId], ref: "User", default: []},
    topics: {type: [Types.ObjectId], ref: "Topic", default: []},
    comments: {type: [Types.ObjectId], ref: "Comment", default: []},
}, {timestamps: true});

articleSchema.plugin(uniqueValidator);
const Article = model("Article", articleSchema);
module.exports = Article;
