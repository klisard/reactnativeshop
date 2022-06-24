import * as firebase from '@react-native-firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwlLTjn2-vrRp8VxwYHhb6Re0sJSixAfY",
  authDomain: "final-project-51f84.firebaseapp.com",
  databaseURL: "https://final-project-51f84-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-51f84",
  storageBucket: "final-project-51f84.appspot.com",
  messagingSenderId: "195108837316",
  appId: "1:195108837316:web:ef6657c3f2651656b03691"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };