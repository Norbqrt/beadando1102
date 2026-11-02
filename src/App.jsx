import { useState } from 'react'
import './App.css'
import Panel from './Panel'

function App() {
  const szinek = [
    {
      nev: 'Rózsaszín',
      rgbID: '#FFC0CB',
    },
    {
      nev: 'Sarga',
      rgbID: '#FFFF00',
    },
    {
      nev: 'Piros',
      rgbID: '#FF0000',
    },
    {
      nev: 'Fekete',
      rgbID: '#000000',
    },
    {
      nev: 'Fehér',
      rgbID: '#FFFFFF',
    },
  ]
  const [kivszin, setkivszin] = useState(0)

  return (
    <main>
      <select
        value={kivszin} onChange={(event) => setkivszin(event.target.selectedIndex)}>
        {szinek.map((szin, index) => (<option key={szin.nev} value={index}> {szin.nev}</option>
        ))}
      </select> <p>{szinek[kivszin].nev}</p>
      <Panel szin={szinek[kivszin].rgbID} />
    </main>
  )
}

export default App
