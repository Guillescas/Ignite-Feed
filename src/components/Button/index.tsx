import { ButtonVariants, IButtonProps } from "./types"

import styles from "./styles.module.css"

export function Button(props: IButtonProps) {
  const { variant = ButtonVariants.Primary } = props

  return (
    <button
      className={`${styles.button} ${variant} ${props.className}`}
      {...props}
    >
      {props.children}
    </button>
  )
}
