import {useState} from "react";

import DatePicker from './components/date-picker/DatePicker'

import './App.css'

function App(): JSX.Element {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <DatePicker 
        onChange={(value) => setDate(value)}
        title='Hola mundo'
        initialDate={new Date()}
      />
      {date && <div>{date.toISOString()}</div>}
    </>
  )
}

export default App
