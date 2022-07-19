import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Button } from "../Button"
import { Comment } from "../Comment"
import { Avatar } from "../index/Avatar"

import { IPostProps } from "./types"

import styles from "./styles.module.css"

export function Post(props: IPostProps) {
  const formattedPublishedDate = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  )

  const relativePublishedDateRelativeToNow = formatDistanceToNow(
    props.publishedAt,
    {
      locale: ptBR,
      addSuffix: true,
    }
  )

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time
          title={formattedPublishedDate}
          dateTime={props.publishedAt.toISOString()}
        >
          {relativePublishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map((line) => {
          switch (line.type) {
            case "paragraph":
              return <p>{line.content}</p>
            case "link":
              return (
                <p>
                  <a href="#">{line.content}</a>
                </p>
              )

            default:
              return
          }
        })}
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
