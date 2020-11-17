var express = require('express');
var router = express.Router();
const Post = require('../models/Post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// get back all the posts 
router.get('/', async (req, res,) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err});
  }
});

//submits a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    preparing: req.body.preparing
  });
  try {
  const savedPost = await post.save();
    res.json(savedPost);
  }catch(err){
    res.json({ message: err });
  }
});

//specyfic post
router.get('/:postId', async (req, res) => {
  try {
  const post = await Post.findById(req.params.postId);
  res.json(post);
  } catch (err) {
    res.json({ message: err});
  }
});

//delete specyfic post
router.delete('/:postId', async (req, res) => {
  try {
  const removedPost = await Post.remove({_id: req.params.postId });
  res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a post
router.patch('/:postId', async (req, res) => {
  try {
  const updatedPost = await Post.updateOne(
    { _id: req.params.postId },
    { $set: { title: req.body.title }}
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }  
});

module.exports = router;
