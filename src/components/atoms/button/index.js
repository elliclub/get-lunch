import React from 'react';
import './index.scss';

class Button extends React.Component {
    render () {
        return (
            <div className="wrapper">
                <a className="button is-medium">Change recipe here</a>
            </div>
        )
    }
}

export default Button;