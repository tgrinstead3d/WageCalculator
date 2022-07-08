// import "./../Styles/DateInput.css"

const handleSubmit = (e) => {
    console.log('Date and Time Submitted!')
    e.preventDefault();
}



function DateRangePicker() {

    return (
        <>
            <form className="flex flex-col font-sans w-[100%]">
                <label className="block text-gray-500">Pick your start date / time.</label>
                <div className="flex flex-row mb-2">
                    <input type="datetime-local" className="input input-bordered w-full max-w-full"/>
                </div>
                <label className="block text-gray-500">Pick your end date / time.</label>
                <div className="flex flex-col">
                    <input type="datetime-local" className="input input-bordered w-full max-w-full flex flex-row"/>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-4 max-w-full">OK</button>
                </div>
            </form>
        </>
    );
}

export default DateRangePicker;
