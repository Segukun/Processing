import './App.css'
import { useState } from 'react'
import ScreenDrawing from './screens/Screen1'
import ScreenShapes from './screens/Screen2'
import ScreenStats from './screens/Screen3'

const tabs = [
  { label: 'Ejercicio 1', icon: '一', component: ScreenDrawing },
  { label: 'Ejercicio 2', icon: '二', component: ScreenShapes },
  { label: 'Ejercicio 3', icon: '三', component: ScreenStats },
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
