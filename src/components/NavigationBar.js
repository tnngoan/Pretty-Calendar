import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <div className="flex justify-between items-center h-20 px-12">
      <div className="flex justify-around flex-shrink items-center text-blue-800">
        <button className="px-4">Today</button>
        <FontAwesomeIcon icon={faChevronLeft} className="px-4" />
        <FontAwesomeIcon icon={faChevronRight} className="px-4" />
        <p className="px-4 font-semibold">Jan 2022</p>
      </div>
      <div>
        <button className="bg-blue-700 p-2 px-4 rounded-xl text-gray-100">
          Month
          <FontAwesomeIcon icon={faChevronDown} className="px-2" />
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
