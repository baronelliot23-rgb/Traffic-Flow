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

// ====== Company Selection ======
const companyButtons = document.querySelectorAll('.company-btn');
const ticketCards = document.querySelectorAll('.ticket-card');

companyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        companyButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const company = btn.dataset.company;

        // Show only tickets matching selected company
        ticketCards.forEach(card => {
            if (company === 'all' || card.classList.contains(company)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ====== Book Ticket Button ======
const bookButtons = document.querySelectorAll('.book-btn');

bookButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const ticketCard = btn.closest('.ticket-card');
        const companyName = ticketCard.querySelector('.ticket-company').innerText;
        const price = ticketCard.querySelector('.ticket-price').innerText;
        const plate = ticketCard.querySelector('.plate-number').innerText;

        alert(`Booking ticket for ${companyName}\nPrice: ${price}\nPlate Number: ${plate}`);
    });
});

// ====== Sidebar Active Link ======
const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ====== Optional: Smooth Scroll for Anchor Links ======
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ====== Show Home Section by Default ======
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
