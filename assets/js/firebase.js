// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1jYJYnSgSw8LpiYsIDYnPFwxfNQIQBQI",
    authDomain: "belajar-prancis.firebaseapp.com",
    databaseURL: "https://belajar-prancis-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "belajar-prancis",
    storageBucket: "belajar-prancis.appspot.com",
    messagingSenderId: "770394672995",
    appId: "1:770394672995:web:52e5f9e66836246a39cd56",
    measurementId: "G-3MMBD2PV8S"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();