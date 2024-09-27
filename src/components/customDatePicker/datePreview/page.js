"use client";
import { useDatePicker } from "@/app/context/datePickerContext";
import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './DatePreview.module.css'

const DatePreview = () => {
  const { startDate, endDate } = useDatePicker();

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (startDate && date.toDateString() === startDate.toDateString()) {
        return 'highlight';
      }
      if (endDate && date.toDateString() === endDate.toDateString()) {
        return 'highlight';
      }
    }
    return null;
  };

  return (
    <div>
      <h1>Selected Dates: </h1>
      <Calendar
        tileClassName={tileClassName}
        value={[startDate, endDate]}
        selectRange={true}
        className={styles.highlight}
      />
      <ul>
        <li>
          StartDate: 
          {
            startDate && startDate.toLocaleDateString('en-GB')
          }
        </li>
        <li>
          EndDate: 
          {
            endDate && endDate.toLocaleDateString('en-GB')
          }
        </li>
      </ul>
    </div>
  );
};

export default DatePreview;
