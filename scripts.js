document.addEventListener('DOMContentLoaded', () => {
  const dropdownButton = document.querySelector('.dropdown button');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownButton.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdownContent.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  });

  const aboutSection = document.getElementById('about');
  const aboutCard = document.getElementById('about-card');
  const closeCard = document.getElementById('close-card');
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const joinUsBtn = document.getElementById('join-us-btn');
  const aurorabtn = document.getElementById('aurora-btn');

  aboutSection.addEventListener('click', () => {
    aboutCard.classList.add('visible');
  });

  closeCard.addEventListener('click', (event) => {
    aboutCard.classList.remove('visible');
    event.stopPropagation();
  });

  learnMoreBtn.addEventListener('click', () => {
    aboutCard.classList.add('visible');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  joinUsBtn.addEventListener('click', () => {
    window.open('https://forms.gle/WWyZZgLvxLTXVN1P8', '_blank');
  });

  aurorabtn.addEventListener('click', () => {
    window.open('https://aurora.ishan.vip', '_blank');
  });

  const downloadNewsletterBtn = document.getElementById('download-newsletter-btn');
  const viewArchiveBtn = document.getElementById('view-archive-btn');
  const eventsnova = document.getElementById('events-nova');

  downloadNewsletterBtn.addEventListener('click', () => {
    window.open('newsletter/2025/Newsletter-April-2025.pdf', '_blank');
  });

  eventsnova.addEventListener('click', () => {
    window.open('assets/event1.pdf', '_blank');
  });

  viewArchiveBtn.addEventListener('click', () => {
    window.location.href = 'newsletter.html';
  });
});