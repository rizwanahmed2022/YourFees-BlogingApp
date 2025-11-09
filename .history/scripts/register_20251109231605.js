import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseConfig.js";

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector('#form')

//start Cloudinary For Upload Profile Picutre
const profile = document.querySelector("#profile");
var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "deex2hwgz",
    uploadPreset: "yourfeeds",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
    }
  }
);
profile.addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);
//End Cloudinary For Upload Profile Picutre



///Start Register Function for  New User 
let userId;
let userInfo;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      userId = user.uid
      console.log(userId)
      console.log(firstName.value)
      console.log(lastName.value)
      console.log(user.email)
      userInfo = {
        firstName: firstName.value,
        lastName: lastName.value,
        lastName: lastName.value,
      }
      
    //   window.location = "login.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});
///End Register Function for  New User 

