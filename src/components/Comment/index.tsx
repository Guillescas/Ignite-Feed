import { ThumbsUp, Trash } from "phosphor-react"

import { Button } from "../Button"
import { Avatar } from "../index/Avatar"

import styles from "./styles.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar borderless src="https://github.com/Guillescas.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Illescas</strong>

              <time title="11 de maio às 11:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <Button title="Deletar comentário">
              <Trash size={20} />
            </Button>
          </header>

          <p>Muito bom Deva, parabens</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
