import {useState} from 'react'

function App() {
  const [text, setText] = useState('Change to blue')
  const [color, setColor] = useState('red')

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
    <button onClick={handleClick } style={{backgroundColor: color}}>{text}</button>
  );
}

export default App;
