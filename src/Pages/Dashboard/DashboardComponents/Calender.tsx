import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white shadow-md w-fit h-fit rounded-lg p-4'>
        <Calendar onChange={onChange} value={value} className="" />
    </div>
  );
};

export default Calender;
