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

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        //console.log(snapShot);

        if(!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                
                try {
                        await userRef.set ({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                }
                catch (error) {
                        console.log('error creating user', error.message);
                }

        }

        return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;