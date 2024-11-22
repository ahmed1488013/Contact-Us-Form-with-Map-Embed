document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    alert('Thank you for reaching out to us!');
    document.getElementById('contactForm').reset();
  });
  