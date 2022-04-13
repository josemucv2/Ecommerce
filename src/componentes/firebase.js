import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
 apiKey: "AIzaSyDU-WqrCau2uJgwDArM88P7_FqsWYmZ7KI",
  authDomain: "bkg-a4708.firebaseapp.com",
  projectId: "bkg-a4708",
  storageBucket: "bkg-a4708.appspot.com",
  messagingSenderId: "950384445945",
  appId: "1:950384445945:web:39ddee396c7774e9b71528",
  measurementId: "G-D6X4W1GGCW"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const analytics = getAnalytics(app)

