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
                <h1 className="text-indigo-600 text-[26px] mb-4 text-center">Babysitter Wage Calculator</h1>
                <div className="flex flex-col items-center">
                    <div className="btn btn-success w-full mb-4 text-white">Configure your wages</div>
                    <DateRangePicker/>
                    <div className="block h-[2px] w-[95%] bg-gray-100 mt-6"></div>
                    <Earnings />
                </div>
            </div>
        </div>
    );
}

export default App;
