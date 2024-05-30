import { update, ref } from "firebase/database";
import { db } from "./firebaseApi.js";
export function updateAssignment(firebaseCardKey, status, assigned, setError) {
    console.log(firebaseCardKey, status, assigned);
    // Updates the Assignemnt in firebase
    const cardToUpdateRef = ref(db, `/assignments/${firebaseCardKey}/`);
    try {

        update(cardToUpdateRef, { status: status, assigned: assigned })
    } catch (error) {
        setError("Something went wrong :(,try again later");
    }

}