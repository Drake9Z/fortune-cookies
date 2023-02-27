import './App.css'
import { useState } from 'react'
import QuoteCard from './components/QuoteCard'
import phrases from './data/phrases.json'
import Author from './components/Author'

function App() { 


const [index, setIndex] = useState(0)

const changePhrase = () => {
  setIndex(Math.floor(Math.random() * 15))
}

  return (
    <div className="App">
      <h1>Fortune Cookies</h1>
      <QuoteCard
      changeB={index}
      phrasesData = {phrases[index]}
      />
      <Author
      phrasesData = {phrases[index]}
      />
      <button onClick={changePhrase}>
        Probar mi suerte
      </button>
    </div>
  )
}

export default App
