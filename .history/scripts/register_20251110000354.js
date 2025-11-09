import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { db } from "./firebaseConfig.js";

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
//
//
//
//start Cloudinary For Upload Profile Picutre
let profileImage;
const profile = document.querySelector("#profile");
var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "deex2hwgz",
    uploadPreset: "yourfeeds",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      profileImage = result.info.secure_url;
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
//
//
//
//
///Start Register Function for  New User
let userId;
let userInfo;
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      userId = user.uid;

      //store userinformation in object to send to firestore
      userInfo = {
        uid: userId,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        profile: profileImage,
        isAdmin: false,
      };
      console.log(userInfo);

    ///Send
      try {
        const docRef = addDoc(collection(db, "ads"), userInfo);
        console.log("Document written with ID: ", docRef.id);
        alert("ad published");
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      //   window.location = "login.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});
///End Register Function for  New User

function addData(data) {}
