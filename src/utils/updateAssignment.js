import { update, ref } from "firebase/database";
import { db } from "./firebaseApi.js";
export function updateAssignment(firebaseCardKey, status, assigned, setError) {
    // Updates the Assignemnt in firebase
    const cardToUpdateRef = ref(db, `/assignments/${firebaseCardKey}/`);
    try {
        update(cardToUpdateRef, { status: status, assigned: assigned }).then(name => {
            console.log(name);
        })
            .catch(e => console.log('ny error', e));
    } catch (error) {
        setError("Something went wrong :(,try again later");
    }

}