import firebase from './init-firebase';

const db = firebase.firestore()

const collection = db.collection("users");

export default collection;