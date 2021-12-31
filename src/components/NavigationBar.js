import React from "react";

function NavigationBar() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-around">
        <button>Today</button>
        <button>Back</button>
        <button>Next</button>
        <p>Jan 2022</p>
      </div>
      <div>Month dropdown</div>
    </div>
  );
}

export default NavigationBar;
