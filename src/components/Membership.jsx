import React from 'react'; 
import "./Membership.css"; 
import sideimg from "../assets/img.png";

const Membership = () => {
  return (
    
    <div className="flex flex-col lg:flex-row mt-16 justify-center p-4 bg-gray-50 min-h-screen">
      
     
      <div className="flex flex-col  md:flex-row   lg:items-stretch w-full max-w-7xl bg-white shadow-lg rounded-xl p-6 lg:p-10 gap-15">

       
        <div className="flex-shrink-0 flex justify-center lg:block">
          <img
            src={sideimg}
            alt="Membership illustration"
            className="rounded-3xl w-full max-w-md lg:max-w-none lg:w-[300px] lg:h-[350px] object-cover shadow-md"
          />
        </div>

       
        <div className="flex flex-col w-full max-w-md lg:max-w-none text-left flex-grow space-y-0">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Membership Name</h2>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">No. Of Sessions:</span> 10
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Course Validity:</span> 6 Months
          </p>
          <h2 className="text-5xl font-bold text-green-600 mt-4 mb-4">₹99,999</h2> 
          <h4 className="text-xl font-semibold text-gray-700">
            Pick any X Course out of Y Courses
          </h4>

          <div className="space-y-6 mt-4">
            {[1, 2, 3, 4].map((quarter) => (
              <div key={quarter}>
                <h5 className="text-lg font-semibold text-gray-700 ">Quarter {quarter}</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor={`course${(quarter - 1) * 2 + 1}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Select Course {(quarter - 1) * 2 + 1}*
                    </label>
                    <select
                      id={`course${(quarter - 1) * 2 + 1}`}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
                      defaultValue=""
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`course${(quarter - 1) * 2 + 2}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Select Course {(quarter - 1) * 2 + 2}*
                    </label>
                    <select
                      id={`course${(quarter - 1) * 2 + 2}`}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
                      defaultValue=""
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option4">Option 4</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button className="w-full px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

     
      <div className="w-full lg:w-auto mt-8 lg:p-12 lg:mt-0 lg:ml-4 p-6 bg-white shadow-lg rounded-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-3">Pick any X Courses out of Y courses</h4>
        <p className="text-lg text-gray-600 mb-2">Available Courses:</p>
        <ul className="list-none  text-gray-700 space-y-1">
          <li>Hindi</li>
          <li>English</li>
          <li>Maths</li>
          <li>Science</li>
          <li>Social Science</li>
        </ul>
      </div>
    </div>
  );
};

export default Membership;