import React from "react";

// Components
import Arrow from "../../../icon/arrow/arrow";

// Styles
import styles from "./month-picker.module.css";

interface MonthPickerProps {
    month: number;
    onMonthChange: (value: number) => void;
}

const MonthPicker: React.FC<MonthPickerProps> = ({month, onMonthChange}) => {

    const handlerClick = (value: number) => () => onMonthChange(month + value)
    
    return (
        <div className={styles.gap}>
            <Arrow fill='red' onClick={handlerClick(-1)} />
            <Arrow partial="right" fill='red' onClick={handlerClick(1)} />
        </div>
    );
};

export default MonthPicker;