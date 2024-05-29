import { ref, remove } from "firebase/database";
import { db } from "./firebaseApi.js";

export function deleteAssignmentCard(firebaseKey) {
    const cardToDeleteRef = ref(db, `/assignments/${firebaseKey}/`)
    remove(cardToDeleteRef);
}