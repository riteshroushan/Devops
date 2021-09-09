var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
service 	:	'gmail',
host		: 'smtp.gmail.com',
port		: 465,
secure		: true,
auth:	{
	type : 'login',
	user: 'riteshroushan',
	pass :'********'
	}

	
});

var mailOptions = {
from	:	'riteshroushan@gmail.com',
to	:	'riteshroushan@yahoo.co.in',
subject	:	'test email',
text	:	'text body emai'
};

transporter.sendMail(mailOptions, function(error, info){
		if(error){
		console.log(error);
	} else {
		console.log('email sent', + info.response);
	}

});
