import {useState} from 'react'

function App() {
  const [text, setText] = useState('Change to blue')
  const [color, setColor] = useState('red')
  const [isDesabled, setIsDesabled] = useState(false)

  function handleClick () {
    if (color === 'red') {
      setColor('blue')
      setText('Change to red')
    } else {
      setColor('red')
      setText('Change to blue')
    }
  }

  return (
    <div>
      <button disabled={isDesabled} onClick={handleClick } style={{backgroundColor: color}}>{text}</button>

     <input onClick={() => setIsDesabled(!isDesabled)} type="checkbox"/>
    </div>
  );
}

export default App;
