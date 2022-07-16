import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import "./styles/global.css"
import styles from "./styles/pages/App.module.css"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main></main>
      </div>
    </div>
  )
}

export default App
