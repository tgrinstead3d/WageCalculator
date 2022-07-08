import WageInput from "./Components/WageInput.tsx";
import DateRangePicker from "./Components/DateRangePicker.tsx";
// import {useState} from "react";
import Earnings from "./Components/Earnings.tsx";
import "./index.css";


function App() {

    // const moment = require('moment');
    //
    // let now = moment().format('LT');

    // const [time, setTime] = useState(now);

    return (
        <div className="flex pt-12 items-start justify-center h-screen w-screen bg-stone-200 font-sans">
            <div className="card w-96 bg-base-100 shadow-xl p-6">
                <h1 className="text-indigo-600 text-2xl font-light">Babysitter Wage Calculator</h1>
                <div className="flex flex-col items-center">
                    <WageInput/>
                    <DateRangePicker/>
                    <Earnings />
                </div>
            </div>
        </div>
    );
}

export default App;
