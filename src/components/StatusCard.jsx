import AssignmentCard from "./AssignmentCard";

function StatusCard({ title, cards, setError }) {
    console.log(title, cards);
    //shows the different boards: to do,in progress,done and its cards
    return (
        <div className="status-card">
            <h1>{title}</h1>
            {cards.map((card) => <AssignmentCard key={card.firebaseKey} card={card} setError={setError} />)}
        </div>
    );
}

export default StatusCard;