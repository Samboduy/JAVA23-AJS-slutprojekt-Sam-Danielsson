import { ref, remove } from "firebase/database";
import { db } from "./firebaseApi.js";
//removes assignment from firebase
export function deleteAssignment(firebaseKey) {
    const cardToDeleteRef = ref(db, `/assignments/${firebaseKey}`)
    remove(cardToDeleteRef);
}