import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";



const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const profile = document.querySelector('#profile')


//start Cloudinary For Upload Profile Picutre 
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'deex2hwgz', 
  uploadPreset: 'yourfeeds'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

profile.addEventListener("click", function(){
    myWidget.open();
  }, false);



// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(email.value);
//   console.log(password.value);

//   createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//       window.location = "login.html"
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       console.error(errorMessage);
//     });
// });