import './App.css'
import { useState } from 'react'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import Screen4 from './screens/Screen4'

const tabs = [
  { label: 'Ejercicio 1', icon: '1', component: Screen1 },
  { label: 'Ejercicio 2', icon: '2', component: Screen2 },
  { label: 'Ejercicio 3', icon: '3', component: Screen3 },
  { label: 'Ejercicio 4', icon: '4', component: Screen4 },
]

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const ActiveScreen = tabs[activeTab].component

  function handleTabClick(index) {
    setActiveTab(index)
  }

  return (
    <main className="app-shell">
      <section className="screen" aria-live="polite">
        <ActiveScreen />
      </section>

      <nav className="bottom-navbar" aria-label="Main navigation">
        {tabs.map((tab, index) => (
          <button
            className={`nav-tab ${activeTab === index ? 'active' : ''}`}
            key={tab.label}
            type="button"
            onClick={() => handleTabClick(index)}
          >
            <span className="nav-icon" aria-hidden="true">
              {tab.icon}
            </span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </main>
  )
}

export default App
