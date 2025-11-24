// Authentication Part

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKGb8gHJ_J1DtWrlKtTJoiQSK9zUcNV-4",
  authDomain: "urban-care-f16da.firebaseapp.com",
  projectId: "urban-care-f16da",
  storageBucket: "urban-care-f16da.firebasestorage.app",
  messagingSenderId: "947887062084",
  appId: "1:947887062084:web:b6d6ef931125913e9f9011",
};

const app = initializeApp(firebaseConfig);

// Button Function
const container = document.querySelector(".container");
const registerbtn = document.querySelector(".register-btn");
const loginbtn = document.querySelector(".login-btn");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function showMessage(message, divId) {
  let messageDiv = document.getElementById(divId);
  if (!messageDiv) {
    console.log("Element not found:", divId);
    return;
  }
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// signup
let submitsignup = document.getElementById("submitsignup");
submitsignup.addEventListener("click", (event) => {
  event.preventDefault();
  const username = document.getElementById("rusername").value;
  const email = document.getElementById("remail").value;
  const password = document.getElementById("rpassword").value;

  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        user: username,
        email: email,
        password: password,
      };

      showMessage("Account Created", "signupmessage");
      let docRef = doc(db, "user", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = "/";
        })
        .catch((err) => {
          console.log("error writting document", err);
        });
    })

    .catch((err) => {
      const errcode = err.code;
      if (errcode == "auth/email-already-in-use") {
        showMessage("Email Already Exit", "signupmessage");
      } else {
        showMessage("Unable to Create User", "signupmessage");
      }
    });
});

let submitsignin = document.getElementById("submitsignin");
submitsignin.addEventListener("click", (event) => {
  event.preventDefault();
  let email = document.getElementById("semail").value;
  let password = document.getElementById("spassword").value;
  let auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("Login is Successful", "signinmessage");
      let user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "/service";
    })
    .catch((error) => {
      const errCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        showMessage("Incorrect Email or Password", "signinmessage");
      } else {
        showMessage("Account does not Exist", "signinmessage");
      }
    });
});
