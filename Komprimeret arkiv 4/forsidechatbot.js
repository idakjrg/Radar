// Når DOM'en er indlæst
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-popup");

    // Vis popup efter 3 sekunder
    setTimeout(() => {
        popup.style.display = "block";
    }, 3000);

    // Luk popup ved klik på luk-knappen
    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Luk popup ved klik uden for popup'en
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});