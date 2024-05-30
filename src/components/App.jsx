
import StatusCard from "./StatusCard.jsx";
import AddAssignmentForm from "./addAssignmentForm.jsx";
import { useEffect, useState } from "react";
import getAssignments from "../utils/getAssignments.js";
import _, { sortBy } from "underscore";

export function App() {

    const [cards, setCards] = useState([]);
    const [error, setError] = useState("");
    const [filterState, setFilterState] = useState("Created First")


    useEffect(() => {
        getAssignments(setCards, setError);
    }, [], [filterState])

    //changes what order of the assignments and filters out the right state, to do, in progress etc...
    function filterCards(status, cards) {
        console.log(cards, "cards");
        switch (filterState) {
            case "Created First":
                return cards.filter((card) => card.status == status)
            case "Created Last":
                const reversedCards = cards.toReversed()
                return reversedCards.filter((card) => card.status == status)
            case "Alphabetical Order":
                const abc = sortBy(cards, "assignment");
                console.log(abc, "abc");
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