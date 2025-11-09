import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { doc, addDoc  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { auth } from "./firebaseConfig.js";
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

      //store userinformation in object to send to firestore
      userInfo = {
        udi: userId,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        profile: profileImage,
        isAdmin: false,
      };
      console.log(userInfo)
try{
    // Add a new document in collection "cities"
    const docs = await addDoc(collection(db, "yourfeedusers"), userInfo);
    console.log('The Document writtern in data ', docs );
}catch(e){
    console.log("Error Occured", e)
}

      //   window.location = "login.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});
///End Register Function for  New User
