import { updateAssignmentCard } from "../utils/updateAssignmentCard";

function AssignmentCard({ card }) {
    const { firebaseKey, assignment, assigned, category, status } = card;
    //what color the background on the card should have depening on what category the card is
    let cssClass
    //changes how the card looks like depending on which is true or false
    let toDo;
    let inProgress;
    let done;

    let tempName;



    switch (status) {
        case "to do": toDo = true;
            break
        case "in progress": inProgress = true;
            break
        case "done": done = true;
            break
    }
    switch (category) {
        case "dev frontend":
            cssClass = "dev-frontend";
            break
        case "dev backend":
            cssClass = "dev-backend";
            break
        case "ux":
            cssClass = "ux";
            break

    }
    function handleInputAssignee(event) {
        tempName = event.target.value;
    }
    function handleCardFormSubmit(event) {
        event.preventDefault();
        if (toDo) {
            console.log(tempName, firebaseKey, "in progress");
            updateAssignmentCard(firebaseKey, "in progress", tempName);
        } else if (inProgress) {
            updateAssignmentCard(firebaseKey, "done", assigned);
        } else if (done) {

        }
    }

    return (
        <div className={cssClass}>
            <p>{assignment}</p>
            <form onSubmit={handleCardFormSubmit}>
                {toDo ? <input onChange={handleInputAssignee} required placeholder="Enter Name"></input> : inProgress ? <p>-{assigned}</p> : <p>-{assigned}</p>}
                {toDo ? <button>Assign {">"}{">"}</button> : inProgress ? <button>Done {">"}{">"}</button> : done ? <button>Done X</button> : <></>};
            </form>
        </div>
    );
}

export default AssignmentCard;