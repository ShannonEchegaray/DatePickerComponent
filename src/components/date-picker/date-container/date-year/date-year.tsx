import React from 'react'

interface DateYearProps {
    children?: React.ReactNode;
}

const DateYear: React.FC<DateYearProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default DateYear