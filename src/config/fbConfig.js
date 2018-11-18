import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBhhQpA7wY3W6XEVc0TSE6BFvKXuJLFfbY",
    authDomain: "mario-plan-blog.firebaseapp.com",
    databaseURL: "https://mario-plan-blog.firebaseio.com",
    projectId: "mario-plan-blog",
    storageBucket: "mario-plan-blog.appspot.com",
    messagingSenderId: "700031208659"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase