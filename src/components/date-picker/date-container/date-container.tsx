import React, { useState, useEffect } from 'react';

import DateYear from './date-year/date-year';
import MonthPicker from './month-picker/month-picker';
import DateGrid from './date-grid/date-grid';

import styles from "./date-container.module.css";

interface DateContainerProps {
    initialDate: Date;
    onChange: (value: Date) => void;
}

const DateContainer: React.FC<DateContainerProps> = ({initialDate, onChange}) => {

    const [date, setDate] = useState<Date>(initialDate);
    const [dateSelected, setDateSelected] = useState<Date | null>(null);

    useEffect(() => {
        if(dateSelected)
            onChange(dateSelected)
    }, [dateSelected, onChange])

    const handlerSetDate = (value: Date) => {
        setDateSelected(value);
    }

    const handlerMonthPicker = (value: number) => {
        const dateClone = new Date(date);
        dateClone.setMonth(value);
        setDate(dateClone);
    }

    const year = date.getFullYear();
    const month = date.getMonth();

    return (
        <>
            <div className={styles.monthContainer}>
                <DateYear>{year} - {date.toLocaleString(undefined, { month: "long" })}</DateYear>
                <MonthPicker month={month} onMonthChange={handlerMonthPicker}/>
            </div>
            <div className={styles.datesContainer}>
                <DateGrid onDateClick={handlerSetDate} actualDate={date}/>
            </div>
        </>
    );
};

export default DateContainer;