import firebase from 'firebase/app';
import 'firebase/auth'; //this is used for authentication  access
import 'firebase/firestore'; //this is used for database access
//These imports set values of firestore and auth in variable firebase.
//firebase import is the base import which gives access to firestore and auth.

const config = {
    apiKey: "AIzaSyDoOi_qCZ8qqeKyFIzf9ILYTcBOZLGnoKY",
    authDomain: "jainclothing-a47f4.firebaseapp.com",
    projectId: "jainclothing-a47f4",
    storageBucket: "jainclothing-a47f4.appspot.com",
    messagingSenderId: "292125783529",
    appId: "1:292125783529:web:9ea9771daf3460307c8778",
    measurementId: "G-69G4W7H7WQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const createUserProfileDoc = async(userAuth, additionalData) => {
    if(!userAuth){  
        return;
    }
    /*const userQuery = firestore.doc('users/rZXaPIsGOJXPR84ITszV');
    console.log(userQuery);
    const snapShot = await userQuery.get();
    console.log(snapShot);*/

    //We got the user query of user who just logged in
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //Now we want to store this in database.
    const snapShot = await userRef.get();
    //This condition prevents creation of same user again or prevent updating information if signed in again
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            },{ merge:true })
        }catch(error){
            console.log("Error in creating user at databse",error.message);
        }
        
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;