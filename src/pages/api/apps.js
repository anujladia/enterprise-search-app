import { db } from "@lib/firebase";

import {
collection,
addDoc,
doc,
deleteDoc,
} from "firebase/firestore";

const addApp = async ({ appId, userId, app_configs = {} }) => {
  try {
    console.log('what foing on?');
    await addDoc(collection(db, "apps"), {
      user: userId,
      app_id: appId,
      app_configs,
      status: 1,
      createdAt: new Date().getTime(),
    });

    console.log("added or now");

    return 'app added successfully';
  } catch (err) {
    console.log(err);
    throw new Error(err.message || 'Error while adding connected app');
  }
};

const removeApp = async (docId) => {
  try {
    const appRef = doc(db, "todo", docId);
    await deleteDoc(appRef);
  } catch (err) {
    console.log(err);
  }
};

export {
  addApp,
  removeApp
};