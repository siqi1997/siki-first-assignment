import React from 'react';


const userInput = (props) => {   
    const inputstyle = { /*name is up to me*/
        border: '2px solid red'
      };
    return(
        
         <input type="text" 
         style={inputstyle} 
         onChange={props.changedName} 
         value={props.displayName} />
    )
};

export default userInput;