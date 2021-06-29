import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: 'AIzaSyA0UZCms6tB8kAbwRQgTY77kkgGAx9ucDY',
        authDomain: 'react-ecomm-db-979a9.firebaseapp.com',
        projectId: 'react-ecomm-db-979a9',
        storageBucket: 'react-ecomm-db-979a9.appspot.com',
        messagingSenderId: '920652423589',
        appId: '1:920652423589:web:f8223bef5597d3d238884c',
        measurementId: 'G-6Z2PTP5PYV'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;