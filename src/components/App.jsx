
import StatusCard from "./StatusCard.jsx";
import AddAssignmentForm from "./addAssignmentForm.jsx";
import { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import _, { sortBy } from "underscore";
import { assignmentsCardsRef } from "../utils/firebaseApi.js";

export function App() {

    const [cards, setCards] = useState([]);
    const [error, setError] = useState("");
    const [filterState, setFilterState] = useState("Created First")

    //Gets all the assignments from firebase
    try {
        useEffect(() => {
            // getAssignments(setCards, setError);

            onValue(assignmentsCardsRef, snapshot => {
                const cardsObj = snapshot.val();

                const cardsArr = [];
                for (const key in cardsObj) {

                    const card = cardsObj[key];
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
                    setError("something went wrong or there are no assignments");
                } else {
                    setError("");
                }
                setCards(cardsArr);
            });
        }, [])
    } catch (error) {
        setError("Something went wrong");
    }

    //changes what order of the assignments and filters out the right state, to do, in progress etc...
    function filterCards(status, cards) {
        switch (filterState) {
            case "Created First":
                return cards.filter((card) => card.status == status)
            case "Created Last":
                const reversedCards = cards.toReversed()
                return reversedCards.filter((card) => card.status == status)
            case "Alphabetical Order":
                const abc = sortBy(cards, "assignment");
                return abc.filter((card) => card.status == status)
        }
    }

    const statusCardArray = ["to do", "in progress", "done"];

    //shows the scrum board
    return (<div className="app">
        <AddAssignmentForm setError={setError} setFilterState={setFilterState} />
        <h3 className="error">{error}</h3>
        {statusCardArray.map((status) => <StatusCard key={status} title={status} cards={filterCards(status, cards)} />)}

    </div>)
}