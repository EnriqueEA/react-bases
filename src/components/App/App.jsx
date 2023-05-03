// import Counter from '../Counter/Counter'
import { useState } from 'react'
import Select from '../Select/Select';
import Clock from '../Clock/Clock';
import './App.css'
import CharacterSearch from '../CharacterSearch/CharacterSearch';

function App() {
  const [combo, setCombo] = useState('text-red-500');
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
      <hr className='m-2 border border-red-500' />
      <CharacterSearch />
    </div>
  )
}

export default App;
