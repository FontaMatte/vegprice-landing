document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("email-form");
  const successMessage = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          form.reset();
          successMessage.style.display = "block";
        } else {
          alert("Errore nell'invio. Riprova.");
        }
      })
      .catch(() => {
        alert("Errore di rete. Riprova.");
      });
  });
});
