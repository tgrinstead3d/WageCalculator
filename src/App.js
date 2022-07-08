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
                <h1 className="text-indigo-600 text-[26px] mb-6 text-center">Babysitter Wage Calculator</h1>
                <div className="flex flex-col items-center">
                    <label htmlFor="wage-modal" className="btn modal-button w-full mb-4 text-white">Configure your wages</label>
                    <input type="checkbox" id="wage-modal" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Enter your hourly wage per time range</h3>
                            <p className="py-4">This is where the inputs will be for the wage + time range</p>
                            <div className="modal-action">
                                <label htmlFor="wage-modal" className="btn btn-success">Done</label>
                            </div>
                        </div>
                    </div>
                    <div className="block h-[2px] w-[95%] bg-gray-100 mt-3 mb-4"></div>
                    <DateRangePicker/>
                    <div className="block h-[2px] w-[95%] bg-gray-100 mt-6"></div>
                    <Earnings />
                </div>
            </div>
        </div>
    );
}

export default App;
