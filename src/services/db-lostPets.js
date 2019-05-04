import firebase from './init-firebase';



const db = firebase.firestore()

const collection = db.collection("db-lostPets");

export default collection;