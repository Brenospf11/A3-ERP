let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(0);
});

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

// Função para alternar a exibição do pop-up de perfil
function toggleProfilePopup() {
    const profilePopup = document.getElementById("profilePopup");
    profilePopup.style.display = profilePopup.style.display === "block" ? "none" : "block";
}

function logout() {
    alert("Você saiu da conta.");
    window.location.href = "/index.html"; 
}

document.addEventListener("click", function(event) {
    const profileIcon = document.querySelector(".profile-icon");
    const profilePopup = document.getElementById("profilePopup");

    if (!profileIcon.contains(event.target)) {
        profilePopup.style.display = "none";
    }
});

