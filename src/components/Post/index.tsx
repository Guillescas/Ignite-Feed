import { Button } from "../Button"
import { Comment } from "../Comment"

import styles from "./styles.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/guillescas.png"
            className={styles.avatar}
          />

          <div className={styles.authorInfo}>
            <strong>Guilherme Illescas</strong>
            <span>Front end developer</span>
          </div>
        </div>

        <time title="11 de maio às 11:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
        </p>
        <p>
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é
        </p>
        <p>
          DoctorCare 🚀 👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>#novoprojeto #nlw #rocketseat</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <Button type="submit">Publicar</Button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
