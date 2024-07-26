import styles from './Styles.module.css'
export const MyInput = ({InputName, inputText, setInputText}) => {

  return (
    <div>
        <input className={styles.MyInput} placeholder={InputName} onChange={e => setInputText(e.target.value)} value={inputText}/>
    </div>
  )
}
