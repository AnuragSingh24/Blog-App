const Post = require("../model/postModel");

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({
            title,
            body
        });
        const savePost = await post.save();

        res.json({
            post: savePost,
        });

    } catch (error) {
        return res.status(500).json({
            error: "Error While Creating comment",
        });

    }
}


exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();


        res.json(
            {
                posts,
            }
        )
    } catch (error) {
        return res.status(500).json({
            error: "Error While fetching post",
        });

    }
}