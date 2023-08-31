document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            tabLinks.forEach(link => link.classList.remove('active-tab'));
            event.target.classList.add('active-tab');
            tabContents.forEach(content => content.style.display = 'none');
            const targetId = event.target.getAttribute('href').slice(1);
            document.getElementById(targetId).style.display = 'block';
        });
    });

});
