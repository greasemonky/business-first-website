// Site-wide behaviour (requires Bootstrap's bundle for the collapse menu).
document.addEventListener('DOMContentLoaded', function () {
    // Close the mobile menu after choosing a link, so in-page anchors aren't hidden behind it.
    var nav = document.getElementById('site-nav');
    if (nav) {
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (nav.classList.contains('show')) {
                    bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false }).hide();
                }
            });
        });
    }

    // Keep the footer copyright year current.
    document.querySelectorAll('[data-year]').forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
});
