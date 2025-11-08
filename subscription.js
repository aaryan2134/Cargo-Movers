document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribeForm');
  if (!form) return;

  // IMPORTANT: Replace these placeholder values with your actual IDs
  const EMAILJS_USER_ID = "YOUR_USER_ID";
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const GOOGLE_FORM_URL = "YOUR_GOOGLE_FORM_URL";
  const GOOGLE_EMAIL_ENTRY_ID = "entry.YOUR_EMAIL_ENTRY_ID";
  const GOOGLE_NAME_ENTRY_ID = "entry.YOUR_NAME_ENTRY_ID";

  // Initialize EmailJS
  emailjs.init(EMAILJS_USER_ID);

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('inputEmail1').value;
    const name = document.getElementById('text1').value;

    // Send email via EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { email, name })
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Subscription successful! A confirmation email has been sent.');
      }, function (error) {
        console.log('FAILED...', error);
        alert('Subscription failed! Please try again.');
      });

    // Send data to Google Forms (optional)
    const formData = new FormData();
    formData.append(GOOGLE_EMAIL_ENTRY_ID, email);
    formData.append(GOOGLE_NAME_ENTRY_ID, name);

    fetch(GOOGLE_FORM_URL, { method: 'POST', mode: 'no-cors', body: formData })
      .then(() => console.log('Form data submitted to Google Forms'))
      .catch(error => console.error('Error submitting form data to Google Forms', error));
  });
});