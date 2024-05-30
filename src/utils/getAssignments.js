import { onValue, } from "firebase/database";
import { assignmentsCardsRef, } from "./firebaseApi.js";
export default function getAssignments(setCards, setError) {
    //Gets all the assignments from firebase

    const cardsArr = [];
    onValue(assignmentsCardsRef, snapshot => {
        const cardsObj = snapshot.val();
        console.log(cardsObj);
        for (const key in cardsObj) {
            // console.log(key, cardsObj[key]);

            const card = cardsObj[key];
            //console.log(card);
            const newCardObj = {
                firebaseKey: key,
                assigned: card.assigned,
                assignment: card.assignment,
                category: card.category,
                status: card.status
            }
            cardsArr.push(newCardObj);
        }
        if (cardsArr.length == 0) {
            setError("Could not get assignments");
        }
        setCards(cardsArr);
    })
}
