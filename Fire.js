import firebase from 'firebase';
const config = require('./config.json')

class Fire {
  constructor() {
    this.init();
  }

  init = () => {
    firebase.initializeApp({
      apiKey: config.apiKey
    })
  }
}

Fire.shared = new Fire();
export default Fire;