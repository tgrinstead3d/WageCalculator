// import "./../Styles/WageInput.css";

const handleWageSubmit = (e) => {
    console.log('Wage Submitted!')
    e.preventDefault();
}

function WageInput() {
    return (
        <div className="font-sans w-[100%] mb-4">
            <form className="flex flex-col">
                <label className="block text-gray-500">Enter your hourly rate.</label>
                <div className="flex flex-row">
                <input type="number" placeholder="Enter Hourly Rate" className="input input-bordered w-full max-w-xs"/>
                <button type="button" onClick={handleWageSubmit} className="btn btn-primary">OK</button>
                </div>
            </form>
        </div>
    );
}

export default WageInput;
