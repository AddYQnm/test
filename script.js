function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu) {
        dropdownMenu.classList.toggle('hidden'); // Toggle visibility
    } else {
        console.error("Dropdown menu element not found.");
    }
}

emailjs.init({
    publicKey: "VsR6SWX0k3EDu7Ajb",
});

window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Ces IDs proviennent des étapes précédentes
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                alert('Message envoyé avec succès !');
            }, (error) => {
                console.log('Échec de l\'envoi...', error);
            });
    });
}
