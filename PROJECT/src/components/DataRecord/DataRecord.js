import React from 'react';
import './DataRecord.scss';

const datarecord = (props) => {
    return(
        <div className="DataRecord">
            <p>{props.title}</p><p>{props.value}</p>
        </div>
    )
}

export default datarecord;