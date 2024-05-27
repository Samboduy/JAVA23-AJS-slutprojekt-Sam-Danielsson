import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDhM0Gbn-E6QACFoNxOeCwxQbiKnlS4keY",
    authDomain: "scrum-b3382.firebaseapp.com",
    databaseURL: "https://scrum-b3382-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "scrum-b3382",
    storageBucket: "scrum-b3382.appspot.com",
    messagingSenderId: "1070826632992",
    appId: "1:1070826632992:web:8f59b84a4f39a0521b8945",
    measurementId: "G-M9KP94Q4BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const assignmentsCardsRef = ref(db, "/assignments");
