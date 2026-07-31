function setLoadingOverlay(visible) {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = visible ? 'flex' : 'none';
    }
}

function shouldShowPageLoading(link) {
    const href = link.getAttribute('href') || '';

    if (!href || href === '#' || href.startsWith('#')) return false;
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false;
    if (link.hasAttribute('download')) return false;
    if (/\.(zip|apk|pdf|exe|doc|docx|ppt|pptx|xls|xlsx)$/i.test(href)) return false;
    if (link.getAttribute('target') === '_blank') return false;

    try {
        const resolvedUrl = new URL(href, window.location.href);
        const isExternalLink = resolvedUrl.origin !== window.location.origin;
        if (isExternalLink) return false;

        const isSamePage = resolvedUrl.pathname === window.location.pathname && resolvedUrl.search === window.location.search;
        return !isSamePage;
    } catch (error) {
        return false;
    }
}

document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function() {
        if (shouldShowPageLoading(this)) {
            setLoadingOverlay(true);
        } else {
            setLoadingOverlay(false);
        }
    });
});


window.addEventListener('pageshow', function(event) {
  
    if (event.persisted) {
        setLoadingOverlay(false);
    }
});


window.addEventListener('load', function() {
    setLoadingOverlay(false);
});