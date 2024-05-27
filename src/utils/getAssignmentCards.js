import { onValue } from "firebase/database";
import { assignmentsCardsRef } from "../utils/firebaseApi.js";
export default function getAssignmentCards(setCards) {
    onValue(assignmentsCardsRef, snapshot => {
        const cardsObj = snapshot.val();
        const cardsArr = [];
        for (const key in cardsObj) {
            // console.log(key, cardsObj[key]);

            const card = cardsObj[key];
            console.log(card);
            newCardObj = {
                firebaseKey: key,
                assigned: card.assigned,
                assignment: card.assignment,
                category: card.category,
                status: card.status
            }
            cardsArr.push(newCardObj);
        }
        console.log(cardsArr);
        setCards(cardsArr);
    })

}
