import { update, push } from "firebase/database";
import { assignmentsCardsRef } from "./firebaseApi.js";

export function createNewAssignmentCard(assignment, category) {
    const newCard = {};

    const newID = push(assignmentsCardsRef).key;

    newCard[newID] = {
        assigned: "",
        assignment: assignment,
        category: category,
        status: "to do"
    }
    update(assignmentsCardsRef, newCard);
}