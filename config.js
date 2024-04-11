import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJrOkV1FSCI0wE0xPi7vdGqQYwczt1M2s",
  authDomain: "music-app-mobail.firebaseapp.com",
  projectId: "music-app-mobail",
  storageBucket: "music-app-mobail.appspot.com",
  messagingSenderId: "242583366747",
  appId: "1:242583366747:web:cd9eb3f7481d35e19a237e",
  measurementId: "G-YBHB23QQEK",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
