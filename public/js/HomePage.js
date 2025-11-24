console.log("js file is connected to homepage ejs file");
console.log("user-email");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  getFirestore,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKGb8gHJ_J1DtWrlKtTJoiQSK9zUcNV-4",
  authDomain: "urban-care-f16da.firebaseapp.com",
  projectId: "urban-care-f16da",
  storageBucket: "urban-care-f16da.firebasestorage.app",
  messagingSenderId: "947887062084",
  appId: "1:947887062084:web:b6d6ef931125913e9f9011",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
  const loggedInUserId = localStorage.getItem("loggedInUserId");

  if (loggedInUserId) {
    console.log("Logged in:", user);

    const docRef = doc(db, "user", loggedInUserId);

    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const userData = docSnap.data();
        document.getElementById("user-email").innerText = userData.email;
      } else {
        console.log("No document found");
      }
    });
  } else {
    console.log("User ID not found in LocalStorage");
  }
});

// logout button

// const logoutButton = document.getElementById("logout");

// logoutButton.addEventListener("click", () => {
//   localStorage.removeItem("loggedInUserId");
//   signOut(auth)
//     .then(() => {
//       window.location.href = "index.html";
//     })
//     .catch((error) => {
//       console.error("Error Signing out:", error);
//     });
// });
