import { initializeApp} from 'firebase/app'
import {getAuth,
    onAuStateChange,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
} from "firebase/auth"
import {getDatabase,
    ref as firebaseDatabaseRef,
    set as firebaseSet,
    child,
    get,onValue
} from "firebase/database"
//ref=reference to a "collection"
const firebaseConfig = {
    apiKey:"AIzaSyC2xZ1ysla2GIOKADI71v9OcxsAQimaIY8",
    authDomain:"trainingappreactnative20-9a781.firebaseapp.com",
    databaseURL:"https://trainingappreactnative20-9a781-default-rtdb.firebaseio.com/",
    projectID:"trainingappreactnative20-9a781",
    storageBucket:"trainingappreactnative20-9a781.appspot.com",
    appId:"1:713049968740:android:e4145652a66dd010b34f71",
    messagingSenderId:"713049968740",
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()
export{
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    sendEmailVerification,
    child,
    get,
    onValue,//reload when online DB changed
    signInWithEmailAndPassword,
}