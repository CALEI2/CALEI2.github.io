// Importa las funciones necesarias desde los SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


  // Configuración de Firebase-->
  const firebaseConfig = {
    apiKey: "AIzaSyC0dtM6tAIBH72tzADW3Y8tJLh44Etr_D0",
    authDomain: "signuplogin-d5708.firebaseapp.com",
    projectId: "signuplogin-d5708",
    storageBucket: "signuplogin-d5708.firebasestorage.app",
    messagingSenderId: "235351599773",
    appId: "1:235351599773:web:b0b1792ffd4e7767eb0274",
    measurementId: "G-EXGZ4BGB46"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

// Funciones de autenticación

// Iniciar sesión
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert('Ingresó con éxito: ' + userCredential.user.email);
  } catch (error) {
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      alert('Error al intentar ingresar: ' + error.message);
    } else {
      alert('Error desconocido: ' + error.message);
    }
  }
}

// Registro
export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert('Tu registro fue exitoso: ' + userCredential.user.email);
  } catch (error) {
    alert('Error al intentar registrarse: ' + error.message);
  }
}

// Función para agregar datos a Firestore (mi base de datos)
export async function addData(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    alert('Documento agregado con ID: ' + docRef.id);
  } catch (error) {
    alert('Error al agregar datos: ' + error.message);
  }
}

