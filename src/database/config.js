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

// const apps = [
//     {appName: 'name', appDesc:'desc'}, 
//     {appName: 'app2', appDesc: 'desc2'}
// ]

firebase.initializeApp(firebaseConfig);

const writeData = (data) => {
    firebase.database().ref('/').set(data);
    console.log('DATA SAVED');
}

const getData = () => {
    let ref = firebase.database().ref('/');
    let data;
    ref.once('value', snapshot => {
        const state = snapshot.val();
        data = state;
    });
    console.log('DATA RETRIEVED', data);
    return data;
}

// writeData(apps);

// let data = getData();
// console.log(data);
export {writeData, getData};
export default firebase;