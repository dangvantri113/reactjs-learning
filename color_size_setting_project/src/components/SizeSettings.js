import {useState} from 'react';

function SizeSettings(props) {

  const decreaseSize = () => {
    if(props.size > 10){
      props.onReceiveSize(props.size-2);   
    }
  }
  const increaseSize = () => {
    if(props.size < 30){
      props.onReceiveSize(props.size+2);   
    }
  }

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
         <h3 className="panel-title">Size : {props.size}</h3>
      </div>
      <div className="panel-body">
        <button type="button" className="btn btn-success" onClick={decreaseSize}>Giảm</button>
        <button type="button" className="btn btn-success" onClick={increaseSize}>Tăng</button>
      </div>
    </div>
  );
}

export default SizeSettings;
