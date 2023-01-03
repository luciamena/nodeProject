const express = require('express');
const controller = require('../../controllers/userController');
//const middleware = require('../../middlewares/auth');

const router = express.Router();

router.get('/', controller.list);
router.post('/', controller.add);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.updatePatch);
//router.delete('/:id', controller.destroy);

module.exports = router;