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
});
