import { IButtonProps } from "./types"

import styles from "./styles.module.css"

export function Button(props: IButtonProps) {
  return (
    <button className={`${styles.button} ${props.className}`} {...props}>
      {props.children}
    </button>
  )
}
