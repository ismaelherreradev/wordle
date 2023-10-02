import Header from './components/Header'
import Game from './components/Game'

import './App.css'

export default function App() {

  return (
    <>
 <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
    </>
  )
}

