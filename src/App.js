import {useState} from 'react'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonTextColor, setButtonTextColor] = useState('blue')
  const buttonText = `Change to ${buttonTextColor}`

  const [isDisabled, setIsDisabled] = useState(false)

  const buttonColor = (() => {
    if (isDisabled) {
      return 'gray'
    } else {
      if (buttonText === 'Change to blue') {
        return 'red'
      } else {
        return 'blue'
      }
    }
  })()

  function handleButtonClick () {
    if (buttonTextColor === 'blue') {
      setButtonTextColor('red')
    } else {
      setButtonTextColor('blue')
    }
  }

  return (
    <div>
      <button disabled={isDisabled} onClick={ handleButtonClick } style={{backgroundColor: buttonColor}}>{buttonText}</button>

    <label htmlFor="disable-button">Disable button</label>
     <input onClick={() => setIsDisabled(!isDisabled)} type="checkbox" id="disable-button" />
    </div>
  );
}

export default App;
