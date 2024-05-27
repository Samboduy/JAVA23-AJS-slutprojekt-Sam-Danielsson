import { update, ref } from "firebase/database";
import { assignmentsCardsRef, db } from "./firebaseApi.js";
export function updateAssignmentCard(firebaseCardKey, status, assigned) {

    const cardToUpdateRef = ref(db, `/assignments/${firebaseCardKey}/`);
    update(cardToUpdateRef, { status: status, assigned: assigned });
}