import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@lib/firebase";

const createNewUser = async ({
  email,
  password,
}) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const login = async ({
  email,
  password,
}) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const logout = async () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { createNewUser, login, logout };