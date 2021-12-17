import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB52rRsy43jqO1FLswUBTJVtO8DmIZf2WA",
    authDomain: "facebook-26161.firebaseapp.com",
    projectId: "facebook-26161",
    storageBucket: "facebook-26161.appspot.com",
    messagingSenderId: "975321733966",
    appId: "1:975321733966:web:16bc70568078efd7879c1f",
    measurementId: "G-TKH0XDP6JW"
};
 
const firebaseapp =firebase.initializeApp(firebaseConfig);

const db= firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;