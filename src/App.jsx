import './App.css'

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
  return (
    <main>
      <select>
        {szinek.map((szin) => (
          <option key={szin.nev} value={szin.rgbID}> {szin.nev}
          </option>
        ))}
      </select>
    </main>
  )
}

export default App
