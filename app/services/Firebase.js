import * as Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCDHBu-mBTM60-AP30Vwu9rrP6Q4Ar9ujQ",
  authDomain: "discoveridge-ae18e.firebaseapp.com",
  databaseURL: "https://discoveridge-ae18e.firebaseio.com",
  projectId: "discoveridge-ae18e",
  storageBucket: "discoveridge-ae18e.appspot.com",
  messagingSenderId: "54894293236"
};
export const firebaseRef = Firebase.initializeApp(config);