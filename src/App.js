import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/landing'

import './fonts/BEBAS/BebasNeueRegular.ttf'
import './fonts/BEBAS/BebasNeueRegular.otf'
import './fonts/ProximaNova/ProximaNovaRegular.otf'
import Types from './pages/types'


function App() {

  return (
    <div className='mainWrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/types' element={<Types />} />       
          <Route path='*' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
