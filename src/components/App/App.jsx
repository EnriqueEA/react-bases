// import Counter from '../Counter/Counter'
import { useState } from 'react'
import Select from '../Select/Select';
import Clock from '../Clock/Clock';
import './App.css'

function App() {
  const [combo, setCombo] = useState();
  let component = <Clock color={ combo } />;

  // Renderizado condicional
  if (combo === 'text-red-500') {
    component = null;
  }

  return (
    <div className='p-2'>
      <Select setCombo={ setCombo } />
      { component }
      {/* <Counter /> */}
    </div>
  )
}

export default App;
