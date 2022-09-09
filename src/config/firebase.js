const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyCErEFZUNCP1_ATgW3NW1bsj4AHbotXVc4",
  authDomain: "encode-decode-api.firebaseapp.com",
  projectId: "encode-decode-api",
  storageBucket: "encode-decode-api.appspot.com",
  messagingSenderId: "706937065389",
  appId: "1:706937065389:web:a60d38e0870577e8d15b24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = { firebase };
