const router = require('express').Router();
const { addComment, removeComent } = require('../../controllers/comment-controller');

module.exports = router;

// /api/comments/<pizzaID>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId/<commentId>
router.route('/pizzaId/:commentId').delete(removeComment);

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);