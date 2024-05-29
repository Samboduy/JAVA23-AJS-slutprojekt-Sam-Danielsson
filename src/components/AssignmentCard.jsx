import { updateAssignment } from "../utils/updateAssignment";

function AssignmentCard({ card }) {
    const { firebaseKey, assignment, assigned, category, status } = card;

    function handleInputAssignee(event) {
        tempName = event.target.value;
    }
    //assigns someone to a assignment card, moves the card to done or deletes the card depending on status
    function handleCardFormSubmit(event) {
        event.preventDefault();
        if (status == "to do") {
            updateAssignment(firebaseKey, "in progress", tempName);
        }
    }

    function handleCardSubmit(event) {
        if (status == "in progress") {
            updateAssignment(firebaseKey, "done", assigned);
        } else if (status == "done") {

        }
    }
    //shows the assignment card, changes the cards layout depending on it's status


    return (<div className={category.replace(' ', '-')}>
        <p>{assignment}</p>
        {status == "in progress" && <button onClick={handleCardSubmit}>Done {">>"}</button>}
        {status == "done" && <button onClick={handleCardSubmit}>Remove X</button>}
        {status == "to do" && <form onSubmit={handleCardFormSubmit}>
            <input onChange={handleInputAssignee} required placeholder="Enter Name"></input>
            <button>Assign {">>"}</button>
        </form>}
    </div>
    )
}

export default AssignmentCard;