// CxMIsan_25548-ugb

const form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let dataForm = {
    name: form.Name.value,
    mail: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  };
  emailjs.send("service_yo4pv5o", "template_contact", dataForm).then(
    function (response) {
      console.log("Success");
      alert("Votre message a bien été envoyé");
      Name.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
    },
    function (error) {
      console.log("Erreur", error);
    }
  );
});
