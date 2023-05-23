import firebase from "../firebase/firebase";

const db = firebase.collection("/videojuegos");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(dinosaruio) {
    return db.add(dinosaruio);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

// eslint-disable-next-line 
export default new TutorialDataService();