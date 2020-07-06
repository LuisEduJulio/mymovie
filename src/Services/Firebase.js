import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

//Configurações do seu projeto
let firebaseConfig = {
  apiKey: "AIzaSyBaVhDQ4_zR-9JPatWeqPfqpnDm9DZ2s3o",
  authDomain: "chamados-app-firebase.firebaseapp.com",
  databaseURL: "https://chamados-app-firebase.firebaseio.com",
  projectId: "chamados-app-firebase",
  storageBucket: "chamados-app-firebase.appspot.com",
  messagingSenderId: "829877616645",
  appId: "1:829877616645:web:f7a2cefe1d0ceb08951c6c",
  measurementId: "G-QZ5QNKCZC8"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    //Referenciando a database para acessar em outros locais
    this.app = app.database();

    this.storage = app.storage();
  }

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password)
  }

  logout() {
    return app.auth().signOut();
  }

  async register(nome, email, password) {
    await app.auth().createUserWithEmailAndPassword(email, password)

    const uid = app.auth().currentUser.uid;

    return app.database().ref('usuarios').child(uid).set({
      nome: nome,
      email: email
    })

  }

  isInitialized() {
    return new Promise(resolve => {
      app.auth().onAuthStateChanged(resolve);
    })
  }

  getCurrent() {
    return app.auth().currentUser && app.auth().currentUser.email
  }

  getCurrentUid() {
    return app.auth().currentUser.uid
  }

  getCurrenttoken() {
    return app.auth().currentUser.refreshToken
  }

  async getUserName(callback) {
    if (!app.auth().currentUser) {
      return null;
    }

    const uid = app.auth().currentUser.uid;
    await app.database().ref('usuarios').child(uid)
      .once('value').then(callback);

  }

}

export default new Firebase();