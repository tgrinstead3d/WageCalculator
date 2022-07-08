// import "./../Styles/DateInput.css"

const handleDateStartSubmit = (e) => {
    console.log('Start Date Submitted!')
    e.preventDefault();
}
const handleDateEndSubmit = (e) => {
    console.log('End Date Submitted!')
    e.preventDefault();
}



function DateRangePicker() {

    return (
        <>
            <form className="flex flex-col font-sans w-[100%]">
                <label>Pick your start date / time.</label>
                <div className="flex flex-row">
                    <input type="datetime-local" className="input input-bordered w-full max-w-xs"/>
                    <button type="button" onClick={handleDateStartSubmit} className="btn btn-primary ml-2">OK</button>
                </div>
                <label>Pick your end date / time.</label>
                <div className="flex flex-row">
                    <input type="datetime-local" className="input input-bordered w-full max-w-xs flex flex-row"/>
                    <button type="button" onClick={handleDateEndSubmit} className="btn btn-primary ml-2">OK</button>
                </div>
            </form>
        </>
    );
}

export default DateRangePicker;
