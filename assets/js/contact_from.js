const form = document.getElementById("form");
const result = document.getElementById("result");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");
const messageLength = document.getElementById("message-length");

message.addEventListener("input", (e) => {
  messageLength.innerText = `${e.target.value.length}/800`;
});

/*submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  e.stopPropagation();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Enviando...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Correo enviado";
      } else {
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Ha ocurrido un error";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
*/

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  e.stopPropagation();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Enviando...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Correo enviado";
        messageLength.innerText = "0/800";
      } else {
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Ha ocurrido un error";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
