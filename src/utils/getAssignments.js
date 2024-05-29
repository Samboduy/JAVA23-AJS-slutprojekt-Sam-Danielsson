import { onValue, ref } from "firebase/database";
import { assignmentsCardsRef, db } from "./firebaseApi.js";
export default function getAssignments(setCards, setError) {
    //Gets all the assignments from firebase
    try {
        const cardsArr = [];
        onValue(assignmentsCardsRef, snapshot => {
            console.log(snapshot.exists());
            console.log(snapshot, "hallå?");
            setError("");
            const cardsObj = snapshot.val();
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

    } catch (error) {
        setError("Something went wrong :(,try again later");
    }

}
