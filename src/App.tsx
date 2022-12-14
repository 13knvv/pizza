import { Navigate, Route, Routes } from 'react-router-dom'
import AdminPage from './Components/Admin/AdminPage'
import Basket from './Components/Basket/Basket'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import NotFound from './Components/NotFound/NotFound'
import './scss/App.scss'

function App() {
  return <div className="App__container">
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/basket' element={<Basket />} />
      <Route path='/404' element={<NotFound />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='*' element={<Navigate to="/" replace />} />
    </Routes>
    </div>
}

export default App
