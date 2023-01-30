import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "fortbalance@gmail.com", // Your email where you'll receive emails
      from: "fortbalance@gmail.com", // your website email address here
      subject: `[Order from website] : ${req.body.totalPrice}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new order from: ✉️${req.body.user} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${JSON.stringify(req.body.orderItems)},
                ${JSON.stringify(req.body.shippingAddress)},
                ${req.body.paymentMethod},
                ${req.body.itemsPrice},
                ${req.body.shippingPrice},
                ${req.body.taxPrice},
                ${req.body.totalPrice}, </p>
              <br>
              </div>
      
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Fort Balance Inc<br>6046443310</p>
           
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "", message: "Email has been sent" });
}

export default sendEmail;