// import { useState } from 'react';
import './App.css';

function App() {


  return (
    <>
      <h1>Test Cypress</h1>
      <form>
        <label id='inputLabel' htmlFor="exampleInput">Example Input</label>
        <input id='exampleInput' type="text" />
        <label id='checkboxLabel'htmlFor="exampleCheckbox">Example Checkbox</label>
        <input id='exampleCheckbox' type="checkbox" />
        <input id='submit' type="submit" />
      </form>
    </>
  )
}

export default App
