var RateLimit = require('express-rate-limit');

// https://www.npmjs.com/package/express-rate-limit

var signupLoginLimiter = new RateLimit({
  windowMs: 60*60*1000, // 1 hour window
  // delayAfter: 0, // disable delay
  delayAfter: 1, // begin slowing down responses after the first request
  delayMs: 500, // slow down subsequent responses by .5 seconds per request
  max: 15, // start blocking after 15 requests
  message: "Too many tries, please try again after an hour."
});

module.exports = { signupLoginLimiter };