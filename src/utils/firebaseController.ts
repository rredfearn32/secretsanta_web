import FirebaseConfig from './firebaseConfig';

import * as firebase from "firebase/app";
import "firebase/firestore";

class FirebaseController {

    db: any;

    constructor() {
        firebase.initializeApp(FirebaseConfig);
        this.db = firebase.firestore();
    }

    getHeadlines() {
        return this.db.collection('headlines').get();
    }
}

export default FirebaseController;