
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Campeonatos from './pages/Campeonatos'
import Classificacao from './pages/Classificacao'
import Pilotos from './pages/Pilotos'
import Recordes from './pages/Recordes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/campeonatos" element={<Campeonatos />} />
          <Route path="/classificacao" element={<Classificacao />} />
          <Route path="/pilotos" element={<Pilotos />} />
          <Route path="/recordes" element={<Recordes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}