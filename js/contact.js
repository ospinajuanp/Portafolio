function sendEmail (){
  Email.send({
    SecureToken : "f78c1edf-555d-4bb4-8ae7-8e577d75c79c",
    To : 'juanpo996@gmail.com',
    From : 'juanpo996@gmail.com',
    Subject : `${document.getElementById('name').value}`,
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
