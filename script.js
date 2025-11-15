// Smooth scroll
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal animation
const sections = document.querySelectorAll('.reveal');
const reveal = () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(s => {
    const top = s.getBoundingClientRect().top;
    if (top < trigger) s.classList.add('show');
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Rapport PDF handling
function handleRapportFile(e) {
  const file = e.target.files[0];
  const info = document.getElementById('rapport-info');
  const download = document.getElementById('rapport-download');

  if (!file) {
    info.textContent = "Aucun fichier choisi";
    download.classList.add('disabled');
    return;
  }

  if (file.type !== "application/pdf") {
    info.textContent = "Veuillez choisir un fichier PDF.";
    e.target.value = "";
    download.classList.add('disabled');
    return;
  }

  info.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
  const url = URL.createObjectURL(file);
  download.href = url;
  download.download = file.name;
  download.classList.remove('disabled');
}

// Open projet button
document.getElementById('open-projet').addEventListener('click', e => {
  e.preventDefault();
  alert("Ici, tu peux ajouter le lien ou la démo de ton projet 3D (Drive, site ou fichier .glb).");
});
