import React from 'react';
import Logo from './img/logo.png';



export default React.createClass({
    render() {
        return (
            <div className="nav-wrapper bg-header">
                <a href="#" className="brand-logo"><img src={Logo} alt="logo"/></a>
            </div>
        )
    }
})