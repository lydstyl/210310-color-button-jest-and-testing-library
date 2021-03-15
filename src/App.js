import {useState} from 'react'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonTextColor, setButtonTextColor] = useState('MidnightBlue')
  const buttonText = `Change to ${replaceCamelWithSpaces(buttonTextColor)}`

  const [isDisabled, setIsDisabled] = useState(false)

  const buttonColor = (() => {
    if (isDisabled) {
      return 'gray'
    } else {
      if (buttonText === 'Change to Midnight Blue') {
        return 'MediumVioletRed'
      } else {
        return 'MidnightBlue'
      }
    }
  })()

  function handleButtonClick () {
    if (buttonTextColor === 'MidnightBlue') {
      setButtonTextColor('MediumVioletRed')
    } else {
      setButtonTextColor('MidnightBlue')
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
