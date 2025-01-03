const express = require("express");

const router = express.Router();
const postController = require("../controllers/posts");

// /admin/create-post
router.get("/create-post", postController.renderCreatePage);

router.post("/", postController.createPost);

router.get("/edit/:postId", postController.getEditPost);

//two way to update Post
router.post("/edit-post/:postId", postController.updatePost);

router.post("/delete/:postId", postController.deletePost);
module.exports = router;
