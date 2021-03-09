import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBf8VCltpVhGLQid8WlFSjrwraLfcAto3c",
    authDomain: "facebook-c26e7.firebaseapp.com",
    projectId: "facebook-c26e7",
    storageBucket: "facebook-c26e7.appspot.com",
    messagingSenderId: "579193757829",
    appId: "1:579193757829:web:b1e66a77ccc51b412149ec"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;