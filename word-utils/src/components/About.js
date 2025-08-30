import React, { useState } from 'react';

export default function About() {
  const [style, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (style.color === 'black') {
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtnText("Enable Light Mode");
    } else {
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className='container' style={style}>
      <h1 className='my-3'>About us</h1>
      <div className="accordion" id="accordionExample">
        <div style={style} className="accordion-item">
          <h2 style={style} className="accordion-header">
            <button style={style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div style={style} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div  style={style} className="accordion-body">
              <strong>This is the first item's accordion body.</strong>
            </div>
          </div>
        </div>
        <div  style={style} className="accordion-item">
          <h2  style={style} className="accordion-header">
            <button  style={style}className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div  style={style}  id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div  style={style} className="accordion-body">
              <strong>This is the second item's accordion body.</strong>
            </div>
          </div>
        </div>
        <div style={style}  className="accordion-item">
          <h2 style={style} className="accordion-header">
            <button  style={style}className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
    </div>
  );
}
