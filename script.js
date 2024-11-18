document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("Login realizado com sucesso!");
    window.location.href = "/home/home.html";
  } else {
    alert("Email ou senha incorretos. Tente novamente.");
  }
});
