document.addEventListener('DOMContentLoaded', function() {
    console.log('StarBakes website loaded!');

    // Simple form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your enquiry! We will contact you soon at StarBakes!');
            form.reset();
        });
    });
});
