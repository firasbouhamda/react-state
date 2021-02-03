import React, { Component } from 'react';
import Image from '../src/firass.jpg';

class App extends Component {
    constructor(){
        super();
         this.state = {
     Show: false,
        FullName:"firas bouhamda",
        Bio:"I'm a full stack programmer, ",
        Profession:'Student at Go My Code',
        time: new Date().toLocaleString()
        }
     }
     Toggle()
         {
          this.setState({
              Show:true
          }) 
}
 componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
    render() {
        return(
            <div className="body" style={{fontFamily: 'Gabriola'}}> 
            <h1 style={{fontFamily: 'italic', color : "#f2184b"}}>WELCOME TO MY PROFILE</h1>
               {this.state.Show?
               <>
                   <h1 style={{color: "black", textShadow: "white 0.1em 0.1em 0.2em"}}>Full Name: {this.state.FullName} </h1>
               <h1 style={{color: "black", textShadow: "white 0.1em 0.1em 0.2em"}}> BIO: {this.state.Bio}</h1>
              <img src={Image} height="400"/>
              <h1 style={{color: "black", textShadow: "white 0.1em 0.1em 0.2em"}}>Profession : {this.state.Profession}</h1>
               </>
               :null
            }
            <button onClick={()=>this.Toggle()}>Click to Show me</button>  
            <p> The time is {this.state.time}</p>
            </div>
        )
}
}
export default App;