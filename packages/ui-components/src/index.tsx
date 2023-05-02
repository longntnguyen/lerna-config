import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text?: string,
  children?:string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({ children }: Props) => {
  return <button> THỊNH{children}</button>
}
