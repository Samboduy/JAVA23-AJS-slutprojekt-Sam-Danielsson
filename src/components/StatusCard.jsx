import AssignmentCard from "./AssignmentCard";

function StatusCard({ title, cards }) {
    console.log(title, cards);
    return (
        <div>
            <h1>{title}</h1>
            {cards.map((card, i) => <AssignmentCard key={i} card={card} />)}
        </div>
    );
}

export default StatusCard;