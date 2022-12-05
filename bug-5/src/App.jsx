import React, { useRef, useState } from 'react'
import './App.css'

function App() {

  const boxRef = useRef(null)
  const [selected, setSelected] = useState(0)

  const selectedDot = (e) => {
    const dot = e.currentTarget.id
    setSelected(Number(dot))

  }

  React.useEffect(() => {
    // setTimeout(() => {
    boxRef.current.style.transform = `translateY(${selected + 20}px)`
    // }, 10)
  }, [selected])

  const getBox = () => {
    return (
      <div className="timeLine__item__box annimation" ref={boxRef}>
        <div className="timeLine__item__box__content">
          <h3>Item {selected}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.

          </p>

        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="timeLine">
        <button className="timeLine__item__dot" id={0} onClick={selectedDot}>
          <span className="timeLine__item__dot__content">0</span>
        </button>
        {selected === 0 && getBox()}

      </div>
      <div className="timeLine">
        <button className="timeLine__item__dot" id={1} onClick={selectedDot}>
          <span className="timeLine__item__dot__content">1</span>
        </button>
        {selected === 1 && getBox()}

      </div>
      <div className="timeLine">
        <button className="timeLine__item__dot" id={2} onClick={selectedDot}>
          <span className="timeLine__item__dot__content">2</span>
        </button>
        {selected === 2 && getBox()}

      </div>
      <div className="timeLine">
        <button className="timeLine__item__dot" id={3} onClick={selectedDot}>
          <span className="timeLine__item__dot__content">3</span>
        </button>
        {selected === 3 && getBox()}

      </div>
      <div className="timeLine">
        <button className="timeLine__item__dot" id={4} onClick={selectedDot}>
          <span className="timeLine__item__dot__content">4</span>
        </button>
        {selected === 4 && getBox()}

      </div>
      <div className="timeLine">
        <button className="timeLine__item__dot" id={5} onClick={selectedDot}>
          <span className="timeLine__item__dot__content">5</span>
        </button>
        {selected === 5 && getBox()}
      </div>
    </div>

  )
}



export default App
