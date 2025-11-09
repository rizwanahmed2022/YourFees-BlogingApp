import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseConfig.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const signinBtn = document.querySelector("#signinBtn");

form.addEventListener("submit", (event) => {
  event.pr();
  
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location = "index.html";
  })
  .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
