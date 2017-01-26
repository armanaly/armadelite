var nodemailer = require('nodemailer');

var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello)

function handleSayHello(req,res){
    var transporter = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: 'anthony_dupont@hotmail.com',
            pass: 'Goodbye2012'
        }
    });

    var text = 'Hello world from \n\n' + req.body.name;
    var mailOptions = {
        from: 'anthony_dupont@hotmail.com', // sender address
        to: 'anthony.dupont@eduwell.cz', // list of receivers
        subject: 'Email Example', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };
}