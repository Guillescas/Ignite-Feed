import styles from "./styles.module.css"

import { IAvatarProps } from "./types"

export function Avatar(props: IAvatarProps) {
  return (
    <img
      src={props.src}
      className={props.borderless ? styles.avatar : styles.avatarWithBorder}
    />
  )
}
