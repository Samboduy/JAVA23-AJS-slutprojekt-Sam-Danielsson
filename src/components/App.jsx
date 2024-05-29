
import StatusCard from "./StatusCard.jsx";
import AddAssignmentForm from "./addAssignmentForm.jsx";
import { useEffect, useState } from "react";
import getAssignments from "../utils/getAssignments.js";

export function App() {

    const [cards, setCards] = useState([]);
    const [error, setError] = useState("");


    useEffect(() => {
        getAssignments(setCards, setError);
    }, [])

    function filterCards(status, cards) {
        return cards.filter((card) => card.status == status)
    }

    const statusCardArray = ["to do", "in progress", "done"];

    //shows the scrum board
    return (<div>
        <AddAssignmentForm />
        <h3 className="error">{error}</h3>
        {statusCardArray.map((status) => <StatusCard key={status} title={status} cards={filterCards(status, cards)} />)}

    </div>)
}