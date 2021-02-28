import firebase from 'firebase/app';
import 'firebase/firestore'; 

//Now lets say, we have a database in firebase with collection name "users"->documentId->"cartItem"->Any item say hats with a documentId
//To access this we have two functions, one collection to access collection and other doc to access document.

const firestore = firebase.firestore();
firestore.collection("users").doc('osJ1NmkleOTvuBG').collection('cartItem').doc('kkeKOaslPlmne');
firestore.collection('users/osJ1NmkleOTvuBG/cartItem');
firestore.doc('users/osJ1NmkleOTvuBG/cartItem/kkeKOaslPlmne');
