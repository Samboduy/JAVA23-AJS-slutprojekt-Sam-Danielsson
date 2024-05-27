import { createNewAssignmentCard } from "../utils/createNewAssignmentCard.js";

function AddAssignmentForm() {

    let tempAssignment;
    let tempCategory = "ux";

    function handleChangeInput(event) {
        tempAssignment = event.target.value;
    }
    function handleCategoryInput(event) {
        const category = event.target.value;
        tempCategory = category.toLowerCase();
        console.log(tempCategory);
    }

    function handleSubmitAssignmentCard(event) {
        event.preventDefault();
        createNewAssignmentCard(tempAssignment, tempCategory);
    }

    return (
        <div className="add-assignment-container">
            <h1>Scrum Board</h1>
            <form onSubmit={handleSubmitAssignmentCard}>
                <input type="text" required placeholder="Make a assignment!" onChange={handleChangeInput}></input>
                <select onChange={handleCategoryInput}>
                    <option value="ux" >UX</option>
                    <option value="dev backend">Dev Backend</option>
                    <option value="dev frontend">Dev Frontend</option>
                </select>
                <button>Add</button>
            </form>
            <div className="ux"><h3 >UX</h3></div>
            <div className="dev-backend"><h3>Dev Backend</h3></div>
            <div className="dev-frontend"><h3>Dev Frontend</h3></div>
        </div>
    );
}

export default AddAssignmentForm;