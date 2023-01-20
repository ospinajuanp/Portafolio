function sendEmail (){
  Email.send({
    SecureToken : "778f9272-a7ca-4a14-9871-d9974d8d86dd",
    To : 'juanpo996@gmail.com',
    From : document.getElementById('email').value,
    Subject : "This is the subject",
    Body : 
    `Name: ${document.getElementById('name').value}
    Email: ${document.getElementById('email').value}
    Phone: ${document.getElementById('phone').value}
    Message: ${document.getElementById('message').value}
    `
  }).then(
    message => alert('Message Send Succesfully')
  );
}
