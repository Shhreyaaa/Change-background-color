import './App.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const [currentColor, setCurrentColor] = useState('white'); // State to track current background color

  const changeToOrange = () => {
    if (currentColor === 'orange') {
      setCurrentColor('white');
      document.body.style.backgroundColor = 'white';
    } else {
      setCurrentColor('orange');
      document.body.style.backgroundColor = 'rgba(255,205,55,255)';
    }
  };

  const changeToBlue = () => {
    if (currentColor === 'blue') {
      setCurrentColor('white');
      document.body.style.backgroundColor = 'white';
    } else {
      setCurrentColor('blue');
      document.body.style.backgroundColor = 'rgba(13,202,240,255)';
    }
  };

  const changeToGreen = () => {
    if (currentColor === 'green') {
      setCurrentColor('white');
      document.body.style.backgroundColor = 'white';
    } else {
      setCurrentColor('green');
      document.body.style.backgroundColor = 'green';
    }
  };

  return (
    <>   
    <div style={{width:'100%', height:'585px', textAlign:'center'}}>
    <h1 style={{marginTop:'30px', textAlign:'center',fontFamily:'sans-serif'}}>BACKGROUND CHANGE</h1>
    <Button onClick={changeToOrange} variant="outline-warning text-black border-2 " style={{marginTop:'130px', width:'250px', height:'50px',fontWeight:'bold'}}>
    {currentColor === 'orange' ? 'CHANGE TO WHITE' : 'CHANGE TO ORANGE'}
    </Button><br />
    <Button onClick={changeToBlue} variant="outline-info text-black border-2" style={{marginTop:'20px',width:'250px', height:'50px',fontWeight:'bold'}}>
    {currentColor === 'blue' ? 'CHANGE TO WHITE' : 'CHANGE TO BLUE'}
    </Button><br />
    <Button onClick={changeToGreen} variant="outline-success text-black border-2" style={{marginTop:'20px',width:'250px', height:'50px',fontWeight:'bold'}}>
    {currentColor === 'green' ? 'CHANGE TO WHITE' : 'CHANGE TO GREEN'}
    </Button>
    </div>
    </>
  )
}

export default App
