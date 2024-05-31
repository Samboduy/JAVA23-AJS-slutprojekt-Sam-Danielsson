import { deleteAssignment } from "../utils/deleteAssignment.js";
import { updateAssignment } from "../utils/updateAssignment.js";

function AssignmentCard({ card }) {
    const { firebaseKey, assignment, assigned, category, status } = card;
    let tempName;

    function assignedNameInput(event) {
        tempName = event.target.value;
        console.log(tempName);
    }

    //assigns someone to a assignment card, moves the card to done or deletes the card depending on status
    function assignPersonToAssignment(event) {
        event.preventDefault();
        updateAssignment(firebaseKey, "in progress", tempName);
    }

    function deleteOrChangeAssignmentStatus() {
        if (status == "in progress") {
            updateAssignment(firebaseKey, "done", assigned);
        } else if (status == "done") {
            deleteAssignment(firebaseKey);
        }
    }

    //shows the assignment card, changes the cards layout depending on it's status
    return (<div className={category.replace(' ', '-')}>
        <p>Assignment: {assignment}</p>
        {status != "to do" && <p>Assigned To:{assigned}</p>}
        {status == "in progress" && <button onClick={deleteOrChangeAssignmentStatus}>Done {">>"}</button>}
        {status == "done" && <button onClick={deleteOrChangeAssignmentStatus}>Remove X</button>}
        {status == "to do" && <form onSubmit={assignPersonToAssignment}>
            <input onChange={assignedNameInput} required placeholder="Enter Name"></input>
            <button>Assign {">>"}</button>
        </form>}
    </div>
    )
}

export default AssignmentCard;