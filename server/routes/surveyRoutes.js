// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');
// const requireCredits = require('../middlewares/requireCredit');
// const Mailer = require('../services/Mailer');
// const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

// const Survey = mongoose.model('surveys');

// module.exports = app => {
//     app.get('/api/surveys/thanks', (req, res) => {
//         res.send('Thanks for voting!');
//         // console.log('ipeksi');
//         // response.write('<html>');
//         // response.write('<body>');
//         // response.write('<h1>Thanks for voting</h1>');
//         // response.write('</body>');
//         // response.write('</html>');
//         // response.end();
//     });

//     app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
//         const { title, subject, body, recipients } = req.body;

//         const survey = new Survey({
//             title,
//             subject,
//             body,
//             recipients: recipients.split(',').map(email => ({ email: email.trim() })),
//             _user: req.user.id,
//             dateSent: Date.now()

//         });

//         // Great place to send an email
//         const mailer = new Mailer(survey, surveyTemplate(survey));

//         try {
//             await mailer.send();  //sending email
//             await survey.save();  //saving survey
//             req.user.credits -= 1;
//             const user = await req.user.save(); //updating user

//             res.send(user);
//         } catch (err) {
//             res.status(422).send(err);
//         }
//     });
// };


/////////

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredit');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for voting!');
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        console.log(req.body);
        res.send({});
    })

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // Great place to send an email!
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

};