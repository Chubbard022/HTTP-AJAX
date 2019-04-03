import React from 'react';

const Friend = (props) =>{
    return(
        <div className='individual__card'>
            <h5>{props.info.name}</h5>
            <h6>{props.info.age}</h6>
            <h6>{props.info.email}</h6>
        </div>
    )
}
export default Friend;