document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.filter-button');
  const previews = document.querySelectorAll('.project-preview');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      previews.forEach(preview => preview.classList.remove('active'));
      const currentPreview = document.getElementById(`preview${index + 1}`);
      if (currentPreview) {
        currentPreview.classList.add('active');
      }
    });
  });

  // Show first project on load
  const firstPreview = document.getElementById("preview1");
  if (firstPreview) {
    firstPreview.classList.add("active");
  }

    // 🔹 Collapsible Section Logic
    const toggles = document.querySelectorAll('.collapsible-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
          const content = toggle.nextElementSibling;
          const icon = toggle.querySelector('.toggle-icon');
      
          content.classList.toggle('show');
          icon.textContent = content.classList.contains('show') ? '–' : '+';
          icon.classList.toggle('expanded', content.classList.contains('show'));
      });
    });
});
