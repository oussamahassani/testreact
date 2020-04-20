import React, { Component }  from 'react';
import './index.css';
class Hader extends React.Component {
    constructor(props) {  
    super(props);
    this.state = {value: 0};
    this.buttonClicked = this.buttonClicked.bind(this);
      }
     buttonClicked(event) {
        this.setState({value: this.state.value+1});
      }
    render() {
      return (
          <div>   
             <p>I AM A PARAGRAPH</p>
              <p>{this.props.titel} Props </p>
        <button value="test" className="square"  onClick={ this.buttonClicked}>Click  {this.state.value }</button>                               
        <a href="https://www.google.com/">Visit GooGle</a>
     </div>
      );
    }
  }
  
  
  export default Hader;

