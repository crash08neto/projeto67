import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgaNJLVP9u5f372JxrL2TdfhPiWZxPLZk",
  authDomain: "projeto67-41407.firebaseapp.com",
  projectId: "projeto67-41407",
  storageBucket: "projeto67-41407.appspot.com",
  messagingSenderId: "750108118501",
  appId: "1:750108118501:web:4b56184cce02f9230db30c"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();