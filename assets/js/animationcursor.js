document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (
            href &&
            href !== '#' &&
            !href.startsWith('#')
        ) {
            document.getElementById('loadingOverlay').style.display = 'flex';
        }
    });
});