const express = require('express');
const blogs = require('../data/blogs');

// const {
//   getAllTours,
//   createTour,
//   getTour,
//   updateTour,
//   delTour,
//   checkId,
//   checkBody,
// } = require('../controllers/tourController');

// ROUTES
const router = express.Router();

// router.param('id', checkId);

const getAllTours = (req, res) => {
  res.status(200).json(blogs);
};

const getTour = (req, res) => {
  const blog = blogs.find((blog) => blog.id === req.params.id * 1);
  res.json(blog);
};

router.route('/').get(getAllTours);
router.route('/:id').get(getTour);

module.exports = router;
