import React, {useState} from 'react';

function ColorPicker(props) {
  const [colors, setColor] = useState(['red', 'green', 'blue', '#ccc']);
  const showColor = (color) => {
    return {
      background: color
    };
  };
  const setActiveColor = (color) => {
    props.onReceiveColor(color);
  };

  let elColors = colors.map((color, index)=>{
    return <span 
              key={index} 
              style={showColor(color)}
              className={color===props.color?'active':''}
              onClick={()=>setActiveColor(color)}
            ></span>;
  });
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
         <h3 className="panel-title">Color Picker</h3>
      </div>
      <div className="panel-body">
         {elColors}
         <hr/>
      </div>
    </div>
  );
}

export default ColorPicker;
