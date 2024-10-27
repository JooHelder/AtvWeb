document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.read-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = button.previousElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                button.innerText = "Leia Menos";
            } else {
                content.style.display = "none";
                button.innerText = "Leia Mais";
            }
        });
    });
});
