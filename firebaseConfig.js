// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAaT4DEW3E7k2rh9_r2yOS7kdu6olRG7Vg',
  authDomain: 'fruitful-games.firebaseapp.com',
  projectId: 'fruitful-games',
  storageBucket: 'fruitful-games.appspot.com',
  messagingSenderId: '177923543698',
  appId: '1:177923543698:web:823ec2991f0296ac59cc4b',
  measurementId: 'G-RS5PVKQYSX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
