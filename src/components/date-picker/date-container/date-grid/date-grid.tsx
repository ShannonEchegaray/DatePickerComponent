import React from 'react';

import styles from "./date-grid.module.css";

interface DateGridProps {
    actualDate: Date;
    onDateClick: (value: Date) => void;
}

const DateGrid: React.FC<DateGridProps> = ({actualDate, onDateClick}) => {
  
    const weekdays = [...Array(7)].map((_, i) => {
        const currentDate = new Date(actualDate);
        const actualDay = currentDate.getDay();
        currentDate.setDate(currentDate.getDate() - actualDay + i);
        return currentDate.toLocaleString(undefined, {weekday: "long"});
    })

    const dates = [...Array(7*6)].map((_, i) => {
        const currentDate = new Date(actualDate);
        const actualMonth = currentDate.getMonth();
        currentDate.setDate(i + 1 - currentDate.getDay());
        return {
            fullyear: currentDate.getFullYear(),
            month: currentDate.getMonth(),
            date: currentDate.getDate(),
            isCurrentMonth: actualMonth === currentDate.getMonth()
        };
    })

    console.log(dates)

    return (
        <div className={styles["date-grid"]}>
            {weekdays.map((weekday) => <div>{weekday}</div>)}
            {dates.map(({isCurrentMonth, fullyear, month, date}) => (
            <div 
                className={
                    `${styles.button} ${isCurrentMonth ? styles.current : styles.notCurrent}`
                }
                onClick={() => onDateClick(new Date(fullyear, month, date))}
            >
                {date}
            </div>))}
        </div>
    );
};

export default DateGrid;