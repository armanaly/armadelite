var express = require('express');
var cloudinary = require('cloudinary');
var router = express.Router();

router.post('/', function(req, res, next) {
// Function to send data to Blitline

    cloudinary.uploader.upload(req.path, function(result) {
            var message = 'Sorry the cloudinary component had a problem';
        return res.status(500).json({
            message: message,
            error: result
        })
        // return res.status(500).json({
            //     title: 'Erreur',
            //     error: result,
            //     message: message
            // });

    });
    //
    // cloudinary.api.resource('sample',
    //     function(result)   {
    //
    //
    //     console.log(result) });
});

module.exports = router;

