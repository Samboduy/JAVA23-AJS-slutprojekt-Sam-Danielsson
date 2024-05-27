import { title } from "process";
import StatusCard from "./StatusCard.jsx";
import AddAssignmentForm from "./addAssignmentForm.jsx";
import { useEffect, useState } from "react";
import getAssignmentCards from "../utils/getAssignmentCards.js";

export function App() {

    // const cards = [assignment = {
    //     assigned: "",
    //     assignment: "Läsa",
    //     category: "dev frontend",
    //     status: "to do"
    // }, assingment = {
    //     assigned: "Sam",
    //     assignment: "Koda",
    //     category: "dev backend",
    //     status: "in progress"
    // }];


    const [cards, setCards] = useState([]);

    useEffect(() => {
        getAssignmentCards(setCards);
    }, [])

    function filterCards(status, cards) {
        return cards.filter((card) => card.status == status)
    }

    return (<div>
        {/* Filtrera korten med filter() geonom status*/}
        <AddAssignmentForm />
        <StatusCard title="To Do" cards={filterCards("to do", cards)} />
        <StatusCard title="In Progress" cards={filterCards("in progress", cards)} />
        <StatusCard title="Done" cards={filterCards("done", cards)} />

    </div>)
}