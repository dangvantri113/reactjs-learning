import React, {useState} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSettings from './components/SizeSettings';
import Reset from './components/Reset';
import Result from './components/Result';

function App() {
  const [color, setColor] = useState('green');
  const [size, setSize] = useState(12);
  const onReset = () => {
    setColor('green');
    setSize(12);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="container mt-50">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <ColorPicker color={color} onReceiveColor={setColor}/>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <SizeSettings size={size} onReceiveSize={setSize}/>
               <Reset onReset={onReset}/>
            </div>
            <Result color={color} size={size}/>
          </div>
          </div>    
      </div> 
    </div>
  );
}

export default App;
