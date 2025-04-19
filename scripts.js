document.addEventListener('DOMContentLoaded', () => {
  // Dropdown menu toggle
  const dropdownButton = document.querySelector('.dropdown button');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent clicks from propagating to the document
    dropdownContent.classList.toggle('show'); // Toggle the 'show' class
  });

  // Close the dropdown if the user clicks outside of it
  document.addEventListener('click', () => {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  });

  // About Us card functionality
  const aboutSection = document.getElementById('about');
  const aboutCard = document.getElementById('about-card');
  const closeCard = document.getElementById('close-card');
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const joinUsBtn = document.getElementById('join-us-btn');
  const aurorabtn = document.getElementById('aurora-btn');

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

  // Redirect AuroraAI button to the specified Google Form
  aurorabtn.addEventListener('click', () => {
    window.open('https://aurora.ishan.vip', '_blank');
  });

  // Newsletter button functionality
  const downloadNewsletterBtn = document.getElementById('download-newsletter-btn');
  const viewArchiveBtn = document.getElementById('view-archive-btn');
  const eventsnova = document.getElementById('events-nova');

  // Open this month's newsletter
  downloadNewsletterBtn.addEventListener('click', () => {
    // Replace 'path-to-this-months-newsletter.pdf' with the actual file path
    window.open('newsletter/2025/Newsletter-April-2025.pdf', '_blank');
  });

  eventsnova.addEventListener('click', () => {
    window.open('assets/event1.pdf', '_blank');
  });

  // Redirect to the newsletter archive page
  viewArchiveBtn.addEventListener('click', () => {
    window.location.href = 'newsletter.html';
  });
});