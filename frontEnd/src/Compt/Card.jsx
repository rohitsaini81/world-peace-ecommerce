
import "../Css/Card.css"
export default function Card(props) {
	// console.log(props.Data)
    return (
<>
			
      
<div className="card">
				<div className="content">
					<div className="imgBx">
						<img src={props.Data.imgURL} />
					</div>
					<div className="contentBx">
						<h3>{props.Data.title}</h3>
            <span>Iconic Ukrainian national trident symbol</span>
					</div>
				</div>
				<ul className="sci">
					<li>
						<i className="fa fa-wikipedia-w"></i>
					</li>
					<li>
						{
							props.type=="collections"?<span className="lineEffect"></span>:
							<a className='button' style={{padding:"10px 22px"}} href="" target="__blank" rel="noopener noreferrer"> Buy </a>
						}
						
						
					</li>
					<li>
						{
							props.type=="collections"?<span></span>:
						<a className='button' style={{padding:"10px 22px"}} href="" target="__blank" rel="noopener noreferrer"> Add to Cart </a>
						}
					</li>
				</ul>
			</div>
      
  </>
    )
  }
  