import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyoNT-H6A6F15IJT1BbltVFxRVha1pd1c",
    authDomain: "linkedin-clone-c8219.firebaseapp.com",
    projectId: "linkedin-clone-c8219",
    storageBucket: "linkedin-clone-c8219.appspot.com",
    messagingSenderId: "401405708731",
    appId: "1:401405708731:web:f7c966d5e0bcd8da185c9e"
  };
  
 initializeApp(firebaseConfig);
  export const db = getFirestore();

export const auth = getAuth();
 

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

  export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };