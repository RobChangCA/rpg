import React, {component} from 'react';
const StatusDisplay = (props) =>{
        return(
            <div>
                <h2>{`ENERGY: ${props.energy}`}</h2>
                <h2>{`HAPPINESS: ${props.happiness}`}</h2>
                <h2>{`CODING SKILL: ${props.code}`}</h2>
            </div>
        )
    }
export default StatusDisplay;