import React, { useState } from 'react';


export default function Contador(){

    const [contador, setContador] = useState(1);
    
    function addContador(){
        setContador(contador +1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>add</button>
            
        </div>
    );
}

