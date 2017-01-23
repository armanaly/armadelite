var express = require('express');

var router = express.Router();
//Service Mail
var nodemailer = require('nodemailer');
var Form = require('../models/demande');

router.post('/', function(req, res, next) {
    var form = new Form({
        lastName: req.body.name,
        modele: req.body.modeleSelected,
        month: req.body.monthSelected,
        year: req.body.yearSelected,
        portes: req.body.porteSelected,
        mileage: req.body.mileageSelected,
        version: req.body.versionSelected,
       // color: req.body.colorSelected,
        fuelType: req.body.fuelSelected,
        gearBox: req.body.gearBoxSelected,
        power: req.body.powerSelected,
        options: req.body.optionsSelected,
        roulant: req.body.roulant,
        raisonNonRoulant: req.body.raisonNonRoulant,
        raisonPanne: req.body.raisonPanne,
        responsableAccident: req.body.responsableAccident,
        assurance: req.body.typeAssurance,
        importe: req.body.importee,
        firstHand: req.body.firstHand,
        doubleCle: req.body.cles,
        carnet: req.body.carnet,
        postCode: req.body.post_code,
        email: req.body.email,
        phone: req.body.telephone,
        marque: req.body.marqueSelected,
        dateDemande: req.body.dateDemande
    });
    form.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Erreur',
                error: err
            });
        }
        res.status(201).json({
            message: 'Success',
            obj: result
        });

    });

    var content =   "Vendeur: " + req.body.name + "<br> " +
                    "Numéro de téléphone" + req.body.telephone + "<br>" +
                    "Véhicule: " + req.body.marqueSelected + " " + req.body.modeleSelected
        ;

    var transporter = nodemailer.createTransport('smtps://anthony.dupont%40eduwell.cz:Axonian741852@smtp.forpsi.com');
    var mailData = {
        from: 'anthony.dupont@eduwell.cz',
        to: 'anthony_dupont@hotmail.com',
        subject: 'Nouveau véhicule mis en vente' + req.body.marqueSelected + " " + req.body.modeleSelected ,
        text: 'Plaintext version of the message',
        html: content
    };

    transporter.sendMail(mailData, function(error, info){
        if(error){

            return console.log(error);
            //res.json({yo: 'error'});
        }
            console.log('Message sent: ' + info.response);
            //res.json({yo: info.response});

    });
});

module.exports = router;