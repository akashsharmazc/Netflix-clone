import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import {seedDatabase} from '../seed'
const config= {
    apiKey: "AIzaSyAzxgcF6R25O3UAZKHdeXtSivhqUWhm7HE",
    authDomain: "netflix-clone-67681.firebaseapp.com",
    databaseURL: "https://netflix-clone-67681.firebaseio.com",
    projectId: "netflix-clone-67681",
    storageBucket: "netflix-clone-67681.appspot.com",
    messagingSenderId: "22558434604",
    appId: "1:22558434604:web:a623609dcf545bcfcfb889"
};
const firebase=Firebase.initializeApp(config);
console.log(firebase)
export {firebase};