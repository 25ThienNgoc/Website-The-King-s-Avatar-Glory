document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  var success = document.getElementById('contact-success');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      if (success) {
        success.style.display = 'block';
        window.scrollTo({top: form.offsetTop - 40, behavior: 'smooth'});
      }
      setTimeout(function() {
        if (success) success.style.display = 'none';
        form.reset();
      }, 2000);
    };
  }
});
