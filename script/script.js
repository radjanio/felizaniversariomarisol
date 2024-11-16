let currentPage = 1;
const totalPages = 3;

function showPage(page) {
    for (let i = 1; i <= totalPages; i++) {
        const pageElement = document.getElementById(`page${i}`);
        if (i === page) {
            pageElement.classList.add('active');
        } else {
            pageElement.classList.remove('active');
        }
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});