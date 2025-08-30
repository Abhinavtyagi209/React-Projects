import React, { Component } from 'react'
let style1 = 
{
  width : "50px",
  height : "500px"
}
export default class Card extends Component {
  render() {
    let j=0
    let {title,des,url,url1}  = this.props;
    return (
      <div style={style1}> 
        <div class="card" style={{width : "18rem"}}>
   <img src={url} class="card-img-top" alt="..." />
   <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{des}</p>
    <a href={url1} class=" btn btn-sm btn btn-dark">For More Details</a>
  </div>
</div>
      </div>
    )
  }
}