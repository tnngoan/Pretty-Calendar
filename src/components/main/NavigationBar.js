import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, Dropdown, message } from "antd";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";

const onClick = ({ key }) => {
  message.info(`Click on ${key}`);
};

function NavigationBar() {
  const { monthNumber, setMonthNumber, setDaySelected } =
    useContext(GlobalContext);
  function prevMonth() {
    setMonthNumber(monthNumber - 1);
  }
  function nextMonth() {
    setMonthNumber(monthNumber + 1);
  }
  function getToday() {
    // check if sending the same value to useEffect, if yes turn it to negative
    monthNumber === dayjs().month()
      ? setMonthNumber(monthNumber * -1)
      : setMonthNumber(dayjs().month());
    setDaySelected(dayjs());
  }

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item className="px-4" key="January">
        January
      </Menu.Item>
      <Menu.Item key="February">February</Menu.Item>
      <Menu.Item key="March">March</Menu.Item>
      <Menu.Item key="April">April</Menu.Item>
      <Menu.Item key="May">May</Menu.Item>
      <Menu.Item key="June">June</Menu.Item>
      <Menu.Item key="July">July</Menu.Item>
      <Menu.Item key="August">August</Menu.Item>
      <Menu.Item key="September">September</Menu.Item>
      <Menu.Item key="October">October</Menu.Item>
      <Menu.Item key="November">November</Menu.Item>
      <Menu.Item key="December">December</Menu.Item>
    </Menu>
  );
  return (
    <div className="flex justify-between items-center h-20 px-6 py-4 bg-white rounded-t-sm border border-b-0">
      <div className="flex justify-around flex-shrink items-center text-blue-800">
        <button
          className="px-4 py-1 border-1 border-blue-700 rounded-lg border-2 mr-2 hover:text-darkBlue"
          onClick={getToday}
        >
          Today
        </button>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="px-4 cursor-pointer"
          onClick={prevMonth}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="px-4 cursor-pointer"
          onClick={nextMonth}
        />
        <h2 className="px-4 font-semibold text-2xl text-darkBlue">
          {dayjs(new Date(dayjs().year(), monthNumber)).format("MMMM YYYY")}
        </h2>
      </div>
      <Dropdown overlay={menu}>
        <p
          className="cursor-pointer ant-dropdown-link border border-lightBlue p-2 pl-4 rounded-xl bg-lightBlue text-gray-200 hover:text-white"
          onClick={(e) => e.preventDefault()}
        >
          Month
          <FontAwesomeIcon icon={faChevronDown} className="px-2" />
        </p>
      </Dropdown>
    </div>
  );
}

export default NavigationBar;
