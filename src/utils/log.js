import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCbLE_BbS4yNf-us_daX0GvSrZbzSq9OWo",
  authDomain: "eventos-499dd.firebaseapp.com",
  projectId: "eventos-499dd",
  storageBucket: "eventos-499dd.appspot.com",
  messagingSenderId: "825620170618",
  appId: "1:825620170618:web:d10f1b08b75fdefa60b8c3",
  measurementId: "G-QENB2BM7N1"
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
