import { X } from 'phosphor-react'
import { ToastCloseButton, ToastContainer, ToastTopContent } from './style'

export function Toast({ title, subTitle, onCloseButton }: ToastProps) {
  return (
    <ToastContainer>
      <ToastTopContent>
        <div>{title}</div>

        <ToastCloseButton type="button" onClick={onCloseButton}>
          <X alt="Close toast notification button" />
        </ToastCloseButton>
      </ToastTopContent>

      <span>{subTitle}</span>
    </ToastContainer>
  )
}

export interface ToastProps {
  title: string
  subTitle: string
  onCloseButton: () => {}
}
