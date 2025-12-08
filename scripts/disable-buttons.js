document.querySelectorAll('.card-button').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.remove('btn-primary');
        this.classList.add('btn-disabled');
    });
});


