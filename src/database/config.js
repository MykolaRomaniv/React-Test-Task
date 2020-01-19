import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDlr1ZfTwkuf1mtsIlMB4dDacDtAXLXHV4",
    authDomain: "reacttest-eaca9.firebaseapp.com",
    databaseURL: "https://reacttest-eaca9.firebaseio.com",
    projectId: "reacttest-eaca9",
    storageBucket: "reacttest-eaca9.appspot.com",
    messagingSenderId: "809016653403",
    appId: "1:809016653403:web:9a7b096755b32e5e9b317e"
};

firebase.initializeApp(firebaseConfig);

const writeData = (data) => {
    firebase.database().ref('/').set(data);
}

const getData = () => {
    let ref = firebase.database().ref('/');
    let data;
    ref.once('value', snapshot => {
        const state = snapshot.val();
        data = state;
    });

    return data;
}

export {writeData, getData};
export default firebase;