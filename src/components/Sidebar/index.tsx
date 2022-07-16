import { PencilLine } from "phosphor-react"

import { Button } from "../Button"

import styles from "./styles.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1657915690651-c3d437261a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img src="https://github.com/guillescas.png" />

        <strong>Guilherme Illescas</strong>
        <span>Front end developer</span>
      </div>

      <footer>
        <Button>
          <PencilLine size={20} />
          Editar seu perfil
        </Button>
      </footer>
    </aside>
  )
}
