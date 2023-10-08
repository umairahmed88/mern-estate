import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-estate-eaf0c.firebaseapp.com",
	projectId: "mern-estate-eaf0c",
	storageBucket: "mern-estate-eaf0c.appspot.com",
	messagingSenderId: "526350321361",
	appId: "1:526350321361:web:a56dd02e2feed19e23e7f0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
