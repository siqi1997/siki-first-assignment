import React from 'react';

const userOutput = (props) => {   
    return(
        <div className ="UserOutput">

            <p>Username: {props.userName} </p>
            <p>Password: ********</p>

            
        </div>

    )
};

export default userOutput;