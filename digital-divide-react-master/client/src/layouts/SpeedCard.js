import React from 'react';

const SpeedCard = (props) => {
    return(
        <div className={props.size?'col-md-'+props.size:'col-md-3'}>
            <div className="text-center top-card">
                {props.title}
            </div>
            <div className="top-card-text text-center">
                {props.data}
            </div>                        
        </div>
    )
}
export default SpeedCard;