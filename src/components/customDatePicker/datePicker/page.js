"use client";
import { useDatePicker } from "@/app/context/datePickerContext";
import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ isStart }) => {
  const { startDate, setStartDate, endDate, setEndDate, recurrence } = useDatePicker();

  const handleDateChange = (date) => {
    if (isStart) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const getNextDate = (date, recurrence) => {
    const newDate = new Date(date);
    switch (recurrence) {
      case 'daily':
        newDate.setDate(newDate.getDate() + 1);
        break;
      case 'weekly':
        newDate.setDate(newDate.getDate() + 7);
        break;
      case 'monthly':
        newDate.setMonth(newDate.getMonth() + 1);
        break;
      case 'yearly':
        newDate.setFullYear(newDate.getFullYear() + 1);
        break;
      default:
        break;
    }
    return newDate;
  };

  return (
    <div>
      <DatePicker
        selected={isStart ? startDate : endDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsStart={isStart}
        selectsEnd={!isStart}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        minDate={isStart ? null : startDate}
        dateFormat="dd/MM/yyyy"
        placeholderText={isStart ? "Start Date...(DD/MM/YY)" : "End Date...(DD/MM/YY)"}
        className="p-2 border-[1px] border-gray-400 rounded-md outline-none"
      />
      {startDate && (
        <div>
          <p>Next Date: {getNextDate(startDate, recurrence).toLocaleDateString('en-GB')}</p>
        </div>
      )}
    </div>
  );
};

export default DatePickerComponent;
