import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";



const firstName = document.querySelector('#first-name')
const firstName = document.querySelector('#first-name')



form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(email.value);
  console.log(password.value);

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = "login.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});