import firebase from "../firebase";

const db = firebase.collection("/PortadaJuego");

class PortadaJuegoDataService {
  getAll() {
    return db;
  }

  create(PortadaJuego) {
    return db.add(PortadaJuego);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new PortadaJuegoDataService();