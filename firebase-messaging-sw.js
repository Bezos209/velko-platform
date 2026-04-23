importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAxlyFSs4qAxHuf7-fYAajAvQ7VzOVqlZA",
  authDomain: "velco-eb20e.firebaseapp.com",
  projectId: "velco-eb20e",
  storageBucket: "velco-eb20e.firebasestorage.app",
  messagingSenderId: "982912266320",
  appId: "1:982912266320:web:45c3f753c2040b4ed6e155"
});

const messaging = firebase.messaging();
