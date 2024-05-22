function AddAssignmentForm() {
    return (
        <div className="add-assignment-container">
            <h1>Scrum Board</h1>
            <form>
                <input type="text" required placeholder="Make a assignment!"></input>
                <select>
                    <option >UX</option>
                    <option >Dev Backend</option>
                    <option >Dev Frontend</option>
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