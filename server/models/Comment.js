const {Schema, model, Types} = require("mongoose");

const commentSchema = new Schema({
        title: {type: String, required: true},
        content: {type: String, required: true},
        authorName: {type: String, required: true},
        author: {type: Types.ObjectId, ref: "User"},
        article: {type: Types.ObjectId, ref: "Article"},
        usersLiked: {type: [Types.ObjectId], ref: "User", default: []},
    }, {timestamps: true}
);

const Comment = model("Comment", commentSchema);
module.exports = Comment;
