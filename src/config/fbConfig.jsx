import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC3xoO5JPrucD19u1kyqtc_gjyBomI14Ew',
  authDomain: 'velle-353f1.firebaseapp.com',
  databaseURL: 'https://velle-353f1.firebaseio.com',
  projectId: 'velle-353f1',
  storageBucket: 'velle-353f1.appspot.com',
  messagingSenderId: '535619125927'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
