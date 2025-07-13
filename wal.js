function toggleSettings() {
  const menu = document.getElementById('settingsMenu');
  const overlay = document.getElementById('settingsOverlay');
  const visible = menu.style.display === 'block';

  menu.style.display = visible ? 'none' : 'block';
  overlay.style.display = visible ? 'none' : 'block';
}

document.getElementById('settingsOverlay').addEventListener('click', toggleSettings);

document.querySelectorAll('.wallpaper img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const downloadBtn = document.getElementById('downloadBtn');

    modalImg.src = img.src;
    downloadBtn.href = img.src;
    downloadBtn.setAttribute('download', img.alt || 'wallpaper');
    modal.style.display = 'flex';
  });
});

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
