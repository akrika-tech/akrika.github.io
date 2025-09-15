// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// 🔹 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBaQUE3akTGGp_ZIZsWjcICImXdMPTj6M8",
  authDomain: "akrika-dsa-enroll.firebaseapp.com",
  projectId: "akrika-dsa-enroll",
  storageBucket: "akrika-dsa-enroll.firebasestorage.app",
  messagingSenderId: "580058435761",
  appId: "1:580058435761:web:562b8499630d027faa5290",
  measurementId: "G-R4T6GXXRSP"
};

// 🔹 Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Save DSA Enrollment
export async function saveEnrollment(data) {
  return await addDoc(collection(db, "enrollments"), {
    ...data,
    createdAt: serverTimestamp()
  });
}

// 🔹 Save Internship Membership
export async function saveMembership(data) {
  return await addDoc(collection(db, "memberships"), {
    ...data,
    createdAt: serverTimestamp()
  });
}
