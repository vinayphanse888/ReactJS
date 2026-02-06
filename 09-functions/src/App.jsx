import React from 'react'

const App = () => {
  function btnClicked() {
    console.log('hello');
  }
  return (
    <div>
      <button onClick={btnClicked}>Click here</button>
      <button onMouseEnter={btnClicked}>Hover here</button>
    </div>
  )
}

export default App
