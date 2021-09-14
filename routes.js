let router = require('express').Router();


router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Stock Portfolio'
    });
});

var bioController = require('./bioController');

router.route('/bio')
    .get(bioController.index)
    .post(bioController.add);

router.route('/bio/:bio_id')
    .get(bioController.view) 
    .patch(bioController.update)
    .put(bioController.update)
    .delete(bioController.delete);


    module.exports = router;    