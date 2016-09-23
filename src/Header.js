import React from 'react';
import Logo from './img/logo.png';
import Link from 'react-router'



export default React.createClass({
    render() {
        return (
            <div className="row nav-wrapper black bg-header">
                <a href="#" className="brand-logo"><img src={Logo} alt="logo"/></a>
                <Link to='/'>Home</Link>&nbsp;
                <Link to='/address'>Address</Link>

            </div>
        )
    }
})