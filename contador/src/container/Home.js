import React, {Component} from 'react';
import HomeCard from '../ui/HomeCard';
  
export default class Home extends Component{
  render(){
    return(
      <div className="container-fluid text-center">
      <div className="row">
          <HomeCard/>
          <HomeCard/>
          <HomeCard/>              
        </div>
      </div>
    );
  }
}