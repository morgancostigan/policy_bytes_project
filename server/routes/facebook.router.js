const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();
const facebookStrategy = require('../strategies/facebook.strategy');

router.use( facebookStrategy.initialize());
router.use( facebookStrategy.session());

let successUrl;
if(process.env.DEV == 'true'){
  successUrl = process.env.LOCALHOST_SUCCESS_URL
  console.log(successUrl);
} else {
  successUrl = process.env.DEPLOY_SUCCESS_URL
  console.log(successUrl);
}

// Handles Ajax request for user information if user is authenticated
router.get('/', (req, res) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // send back user object from database
    res.send(req.user);
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
});

//TO-DO failureRedirect
router.get('/callback',
facebookStrategy.authenticate('facebook', { successRedirect: successUrl,
                                      failureRedirect: successUrl }));

                                      
router.get('/send',
facebookStrategy.authenticate('facebook', { scope: ['public_profile', 'email'] } ), (req, res) => {
  console.log('in facebook router');
  res.sendStatus(200);

});

// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;