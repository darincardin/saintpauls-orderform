import React from 'react';


import './carousel.scss';

var Carousel = props =>{

	var children = (props.children instanceof Array) ? props.children : [props.children]



	

  return (
		<div id="myCarousel" className="carousel slide" data-ride="carousel">



			<div>
				<div className="carousel-inner">
					{ 
						children.map ((v,i) => (
								<div className={ "item " + (!i && "active")}> {v} </div>
						))
					}
				</div>

				<a className="left carousel-control" href="#myCarousel" data-slide="prev">
					<span className="glyphicon glyphicon-chevron-left"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="right carousel-control" href="#myCarousel" data-slide="next">
					<span className="glyphicon glyphicon-chevron-right"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
			
			
			
			<ol className="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			</ol>
		</div>
	)
}










export default Carousel;


/*
	  
			{ 
				props.children.map ((v,i) =>{
						var className = "" + i==0?"active":"";
							
						return
						(<div className={className}>
						{i} x {v}
							<div className="carousel-caption">
								<h3>Los Angeles</h3>
							<p>LA is always so much fun!</p>
						  </div>
						</div>)
					
					
				})

			}
			

*/
