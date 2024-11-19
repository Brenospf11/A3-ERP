document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const birthdateRaw  = document.getElementById("birthdate").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
  }

  const birthdate = formatDate(birthdateRaw);

  const user = {
      fullname: fullname,
      birthdate: birthdate,
      phone: phone,
      email: email,
      password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Conta criada com sucesso!");
  window.location.href = "/index.html";
});

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}
