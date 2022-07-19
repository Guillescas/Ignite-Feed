import { ButtonHTMLAttributes } from "react"

export enum ButtonVariants {
  Primary = "primary",
  Secondary = "secondary",
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
}
