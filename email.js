var mailer = require('nodemailer');

// nodemailer is module send email //

var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noipaddress8@gmail.com',
        pass: '8940516190'
    }
});

var mailoption = {
     // uncomment below line for  multiple receiver
    // to: 'hemakumarm72@gmail.com',
    from: 'noipaddress8@gmail.com',
    to: 'noipaddress8@gmail.com',

    subject: 'Testing successful to node email',
    html: '<h1>Hello</h1><p>Topic</p>',
    text: 'Hello Hemakumar'


    
};

transporter.sendMail(mailoption, function(error, info){
    if(error)  {
        console.log(error);
        
    } else {
        console.log('Email sent:' + info.respone);


    }
});