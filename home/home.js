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

function toggleProfilePopup() {
    const profilePopup = document.getElementById("profilePopup");
    profilePopup.style.display = profilePopup.style.display === "block" ? "none" : "block";
}

function logout() {
    localStorage.removeItem("user");
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

document.addEventListener("DOMContentLoaded", function () {
    const profilePopup = document.getElementById("profilePopup");

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        profilePopup.innerHTML = `
            <p><strong>Nome:</strong> ${user.fullname}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Data de Nascimento:</strong> ${user.birthdate}</p>
            <p><strong>Telefone:</strong> ${user.phone}</p>
            <a href="#" onclick="logout()"><strong>Sair</strong></a>
        `;
    } else {
        profilePopup.innerHTML = `
            <p>Nenhum usuário conectado.</p>
            <a href="/registro.html">Registrar-se</a>
        `;
    }
});
