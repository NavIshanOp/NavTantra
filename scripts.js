document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.getElementById('about');
  const aboutCard = document.getElementById('about-card');
  const closeCard = document.getElementById('close-card');
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const joinUsBtn = document.getElementById('join-us-btn');

  // Show the About Us card when the section is clicked
  aboutSection.addEventListener('click', () => {
    aboutCard.classList.add('visible');
  });

  // Close the About Us card when the close button is clicked
  closeCard.addEventListener('click', (event) => {
    aboutCard.classList.remove('visible');
    event.stopPropagation(); // Prevent triggering the section click event
  });

  // Redirect Learn More button to show the About Us card
  learnMoreBtn.addEventListener('click', () => {
    aboutCard.classList.add('visible');
    // Optionally scroll to the About section
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Redirect Join Us button to the specified Google Form
  joinUsBtn.addEventListener('click', () => {
    window.open('https://forms.gle/WWyZZgLvxLTXVN1P8', '_blank');
  });
});