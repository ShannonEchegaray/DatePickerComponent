import React from "react"

// Components
import DateTitle from "./date-title/date-title";
import DateContainer from "./date-container/date-container";

// Styles
import styles from "./index.module.css";

interface DatePickerProps {
    title: string;
    initialDate: Date
    onChange: (value: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = React.memo(({title, initialDate, onChange}) => {
    console.log("Hola, soy el date-picker")
    return (
    <div className={styles["date-picker"]}>
        <DateTitle>{title}</DateTitle>
        <DateContainer onChange={onChange} initialDate={initialDate} />
    </div>
  )
})

export default DatePicker;