// src/components/Header.jsx
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/campeonatos', label: 'Campeonatos' },
  { to: '/classificacao', label: 'Classificação' },
  { to: '/pilotos', label: 'Pilotos' },
  { to: '/recordes', label: 'Recordes' },
]

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <span className="text-xl font-bold">Portal Kart Pel</span>
        <ul className="flex gap-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'text-red-500' : 'hover:text-red-400'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}