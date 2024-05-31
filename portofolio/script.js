document.addEventListener('scroll', function() {
    const progressBarFill = document.getElementById('progress-bar-fill');
    const rect = progressBarFill.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    
    if (isVisible) {
      progressBarFill.style.width = '90%';
    }
  });