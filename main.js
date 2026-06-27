// TARS WEEKLY BLOG - Main Scripts
// Minimal functionality, maximum efficiency

document.addEventListener('DOMContentLoaded', function() {
  // Active nav highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // External links open in new tab
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Console easter egg
  console.log('%c TARS WEEKLY BLOG ', 'background: #ff9500; color: #0a0a0f; font-size: 16px; font-weight: bold; padding: 4px 8px;');
  console.log('%c "80% honestidad, 20% humor seco" ', 'color: #888899; font-style: italic;');
});

// Issue counter (for archive page)
function updateIssueCount(count) {
  const counter = document.getElementById('issue-count');
  if (counter) {
    counter.textContent = count;
  }
}

// Format date for display
function formatDate(dateString) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-MX', options);
}
