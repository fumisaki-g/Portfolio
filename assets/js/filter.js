function filtercards(category) {
    const cards = document.querySelectorAll('.card-certificates');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
