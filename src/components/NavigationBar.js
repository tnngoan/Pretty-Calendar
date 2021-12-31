import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-around">
        <button>Today</button>
        <FontAwesomeIcon icon={faChevronLeft} />
        <FontAwesomeIcon icon={faChevronRight} />
        <p>Jan 2022</p>
      </div>
      <div>Month dropdown</div>
    </div>
  );
}

export default NavigationBar;
