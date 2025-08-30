import React, { Component } from 'react'
import loading from './loading.gif';
export default class Load extends Component {
 st = {

}
     render() {
    return (
      <div style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: '700',
  fontSize: '3rem',
  color: '#4A90E2',
  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  textAlign: 'center',
  margin: '20px 0'} }>
        <img  src={loading} alt="Loading..." />  
      </div>
    );
  }
}


