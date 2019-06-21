import React from 'react';
  
const NavBar = (props) => {
  return (
    <div> 
       <nav className="navbar navbar-expand-md navbar-light bg-light">
         <div className="container"> 
           <a className="navbar-brand h1 mb-0" href="#">{props.logo}</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsite">
             <span className="navbar-toggler-icon"></span>
           </button>       
           <div className="collapse navbar-collapse" id="navbarsite">
             <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                 <a className="nav-link" href="#">Incio</a>
               </li><li className="nav-item">
                 <a className="nav-link" href="#">Contado</a>
               </li><li className="nav-item">
                 <a className="nav-link" href="#">Sobre</a>
               </li>
             </ul>
             <div className="dropdown dropdown-toggle mr-" data-toggle="dropdown">Social
               <ul className="dropdown-menu mr-auto">
                 <a className="dropdown-item" href="#">Facebook</a>
                 <a className="dropdown-item" href="#">Twitter</a>
                 <a className="dropdown-item" href="#">Instagram</a>
               </ul>
             </div>        
           </div>
         </div>
       </nav>
    </div>
  );
};

export default NavBar;