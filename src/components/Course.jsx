import React from 'react'
import bimg from "../assets/boyimg.png"
import arrow from "../assets/leftarrow.svg"
import "../components/Course.css"

const Course = () => {
    return (
        <div className="p-4">
           
            <header className="flex gap-2.5 items-center">
                <img className="arrimg" src={arrow} alt="" width="20px" />
                <h3 className="text-[#ea082e] text-lg font-semibold">Confirm Details</h3>
            </header>

          
            <div className=" flex  flex-wrap justify-evenly gap-4 mt-6">
                
                <div className="img">
                    <img src={bimg} alt="" className=" max-w-full mt-5 flex-wrap md:w-[350px] md:h-[400px]" />
                </div>

              
                <div className="w-[70vw]  md:w-[30vw]">
                    <h2 className="m-0 text-xl font-bold text-gray-800 text-ce md:text-center">Course Plan Name</h2>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis id reiciendis incidunt, error assumenda nam?
                    </p>

                   
                    <div className="flex flex-col items-start gap-2 mt-4">
                        {[
                            "Type Of Plan",
                            "Select Batch Size",
                            "Select No. Of Month",
                            "No. Of Classes in a Month",
                            "Select Batch Time"
                        ].map((label, i) => (
                            <div key={i} className="w-full">
                                <label className="font-semibold text-sm text-start  block mb-1">{label}</label>
                                <select
                                    className=" w-[70vw]  md:w-[30vw] p-2 rounded-full bg-[#f8f8f9] text-gray-700"
                                    onChange={() => { }}
                                >
                                    <option value="">option1</option>
                                    <option value="">option1</option>
                                    <option value="">option1</option>
                                    <option value="">option1</option>
                                </select>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

           
            <button className="mt-8 px-6 py-2 bg-blue-700 text-white rounded-full border-none">
                Pay Now
            </button>
        </div>
    )
}

export default Course
