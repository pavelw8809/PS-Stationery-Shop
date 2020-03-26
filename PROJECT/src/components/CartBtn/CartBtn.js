import React from 'react';

const cartbtn = (props) => {
    return(
        <button className="CartBtn">{props.total} PLN</button>
    )
}

export default cartbtn