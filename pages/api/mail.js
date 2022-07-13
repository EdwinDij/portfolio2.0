// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');


export default  async function sendMail(req, res) {
  mail.setApiKey(process.env.SENDGRID_API_KEY);

  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  Message: ${body.message}
  `;

  mail.send ({
    to: 'edwin.d899@gmail.com',
    from: 'hello@mail-portfolio.fr',
    subject:'Nouveau message du portofolio!',
    text: message,
    html: message.replace(/rn/g, '<br>'),
  }).then(() => {
    res.status(200).json({ status: 'Ok' });
  });

  console.log(message)
  console.log(body)
}

