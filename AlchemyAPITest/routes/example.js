var SendGrid = require('sendgrid').SendGrid;
var sendgrid = new SendGrid('jnels124', 'nuggets1');
sendgrid.send({
  to: 'jnels1242@msudenver.edu',
  from: 'jessetnelson89@comcast.net',
  subject: 'Hello World',
  text: 'My first email through SendGrid'
}, function(success, message) {
  if (!success) {
    console.log(message);
  }
});


//var Email = require('sendgrid').Email;
//var email = new Email(optionalParams);

