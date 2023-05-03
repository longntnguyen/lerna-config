import * as React from 'react'
import styles from './styles.module.scss'
import { Button } from 'antd'

interface Props {
  text?: string
  children?: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const ButtonUI = ({ children }: Props) => {
  return (
    <Button shape='round' className={styles.red}>
      {children}
    </Button>
  )
}

export const ButtonUI2 = ({ children }: Props) => {
  return <button className={styles.red}>{children}</button>
}
