"use client";
import { useDatePicker } from "@/app/context/datePickerContext";
import React from "react";

const RecurrenceSelector = () => {
  const { recurrence, setRecurrence } = useDatePicker();

  const handleRecurrenceChange = (e) => {
    setRecurrence(e.target.value);
  };
  return (
    <div>
      <select
        value={recurrence}
        onChange={handleRecurrenceChange}
        className="text-gray-700 outline-none border-[1px] border-slate-900 font-semibold rounded-md p-2 cursor-pointer "
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceSelector;
