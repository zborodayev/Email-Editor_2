import { useRef, useState } from 'react'
import style from './App.module.css'
export const App = () => {
  const imageRef = useRef(null)
  const [imageChangeWidth ,setimageChangeWidth] = useState()
  const [imageChangeHeight ,setimageChangeHeight] = useState()
  const [imag, setImag] = useState('')

  const changeImage = () => {
    imageRef.current.style.width = `${imageChangeWidth}px`
    imageRef.current.style.height = `${imageChangeHeight}px`
  }
  const cancelImage = () => {
    imageRef.current.style.width = `299px`
    imageRef.current.style.height = `168px`
  }
  return (
    <div>
      <img ref={imageRef} src={imag}/>
      <div>
        <input onChange={e => setimageChangeWidth(e.target.value)} value={imageChangeWidth}/>
        <input onChange={e => setimageChangeHeight(e.target.value)} value={imageChangeHeight}/>
        <input onChange={e => setImag(e.target.value)} value={imag}/>
      </div>
      <button onClick={changeImage}>Change Image</button>
      <button onClick={cancelImage} className={style.buttonCancel}> Сancel </button>
    </div>
  )
}
