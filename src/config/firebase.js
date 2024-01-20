import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getFirestore, collection ,addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWT_VcDXIc0lLMCW_1witIx7DwGYcfBwo",
  authDomain: "olxproject-6528c.firebaseapp.com",
  projectId: "olxproject-6528c",
  storageBucket: "olxproject-6528c.appspot.com",
  messagingSenderId: "1076909555949",
  appId: "1:1076909555949:web:769af9df7c9d1233134ce4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function Singup(userInfo){
try{
  const { email, password , age , name} = userInfo;
  await createUserWithEmailAndPassword(auth, email, password);
  await addDoc(collection(db, "users"), {
    name: name,
    age: age,
    email: email,
    
  })
  alert("Successfully REgistered!");
} catch(e){
  alert(e.message)
}
}

export async function login(userInfo){
  try {
    const { email, password } = userInfo;

    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged In Succesfully")
  } catch (e) {
    alert(e.message);
    
  }
} 


export { app ,auth };