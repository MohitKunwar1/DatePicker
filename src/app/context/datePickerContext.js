"use client";
import React, { createContext, useContext, useState } from "react";

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState("daily");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <DatePickerContext.Provider
      value={{
        recurrence,
        setRecurrence,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePicker = () => useContext(DatePickerContext);
