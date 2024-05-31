import { update, push } from "firebase/database";
import { assignmentsCardsRef } from "./firebaseApi.js";

// creates a new Assignment and sends it to firebase
export function createNewAssignment(assignment, category, setError) {
    const newCard = {};

    const newID = push(assignmentsCardsRef).key;

    newCard[newID] = {
        assigned: "",
        assignment: assignment,
        category: category,
        status: "to do"
    }

    try {
        update(assignmentsCardsRef, newCard);
    } catch (error) {
        setError("Something went wrong :(,try again later");
    }
}
