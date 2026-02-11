// ====== Show/Hide Sections ======
function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => {
        if (sec.id === sectionId) {
            sec.style.display = 'block';
        } else {
            sec.style.display = 'none';
        }
    });
}

// ====== Show Home Section by Default ======
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

