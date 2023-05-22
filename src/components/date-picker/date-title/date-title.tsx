import React from 'react';

import styles from "./date-title.module.css";

interface DateTitleProps {
    children?: React.ReactNode;
}

const DateTitle: React.FC<DateTitleProps> = ({children}) => {
  return (
    <div className={styles.title}>{children}</div>
  );
};

export default DateTitle;