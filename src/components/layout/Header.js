import React from 'react'
import logo from '../../asset/img/logo.png'

class Header extends React.Component {

    render() {
        return (
            <div className="wrap-header">
                <nav className="navbar">
                    <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo"/>
                        Name
                    </a>
                </nav>
            </div>
        )
    }
}
export default Header;