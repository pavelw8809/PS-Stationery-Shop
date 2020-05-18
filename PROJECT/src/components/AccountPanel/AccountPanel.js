import React from 'react';

const AccountPanel = (props) => {
    return (
        <div className="AccountPanel">
            <button onClick={props.submitdatachange}>ZAPISZ ZMIANY</button>
            <button onClick={props.changetab}>POWRÓT</button>
        </div>
    )
}

export default AccountPanel;