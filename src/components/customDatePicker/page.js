"use client"
import React from 'react'
import RecurrenceSelector from './recurrenceSelector/page'
import DatePickerComponent from './datePicker/page'
import DatePreview from './datePreview/page'

const CustomDatePicker = () => {
  return (
   <>

    <div className='p-10'>
    <div className='flex space-x-5 '>
        <RecurrenceSelector />
        <DatePickerComponent isStart={true} />
        <DatePickerComponent  isStart={false}/>
    </div>
    <div className='mt-4'>
     <DatePreview />
   </div>
    </div>
     
   </>
  )
}

export default CustomDatePicker;