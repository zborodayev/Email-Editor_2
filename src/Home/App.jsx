import { useState } from "react"
import { MyInput } from "./supporting elements/MyInput"
import styles from './App.module.css'

export const App = () => {
  const [text, setText] = useState('')
  const divText = ''
  const setDivText = () => {
    divText === text
  }

  return (
    <div>
      <MyInput InputName={'name'} inputText={text} setInputText={setText}/>
      <button className={styles.Button} onClick={setDivText()}>Click</button>
      <div>{divText}</div>
    </div>
  )
}
