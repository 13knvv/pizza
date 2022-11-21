import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import './scss/App.scss'

function App() {
  return <div className="App__container">
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
    </div>
}

export default App
