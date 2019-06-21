import React from 'react';
  
const HomeCard = (props) => {
  return (
    <div className="col-12 col-sm-4"> 
      <div className="card" style = {{width: '20rem'}}>
        <img className="card-imag-top rounded mx-auto d-block" style = {{paddingTop: '3px', width: '100px', height:'100px'}} src="http://fpoimg.com/600x300" alt="Card img cap"/>
        <div className="card-block">
          <h4 className="card-title">Titulo do card</h4>
          <p className="card-text">Conheça o card</p>
          <a className="btn btn-light" href="#">Click Aqui</a>
        </div>       
      </div>
    </div>
  );
};

export default HomeCard;