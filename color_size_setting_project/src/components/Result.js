function Result(props) {
  return (
	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
	  <p>Color : {props.color} - Fontsize : {props.size}</p>
	  <div id="content" style = {{color: props.color, borderColor: props.color, fontSize: props.size}}>Nội dung setting</div>
	</div>
  );
}

export default Result;
