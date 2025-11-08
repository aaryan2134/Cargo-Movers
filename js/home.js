document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0; // Start with the first testimonial
  const items = document.querySelectorAll('.testimonial-item');
  if (items.length === 0) return; // Don't run if no testimonials on page

  const totalItems = items.length;
  const changeInterval = 5000; // Change testimonial every 5000ms (5 seconds)

  function rotateTestimonials() {
    items.forEach((item, index) => {
      item.classList.toggle('active', index === currentIndex);
    });
    currentIndex = (currentIndex + 1) % totalItems; // Move to the next item, loop back to 0 at the end
  }

  // Initialize the first testimonial and then start rotating
  rotateTestimonials();
  setInterval(rotateTestimonials, changeInterval);
});