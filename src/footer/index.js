import React, { Component }  from 'react';
import './footer.css';


class Footer extends React.Component {
  constructor(props) {  
  super(props);
    }
  
  
  
  render() {
    return (
        <div>   
            <p>{this.props.titel} </p>
     
      <div className="footer">
      <ul className="myliste">
     <li>tache1</li>
      <li>tache2</li>
      <li>tache3</li>
     </ul>
      </div>
   </div>
    );
  }
}

export default Footer;

