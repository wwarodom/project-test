import React from 'react'
import '../../styles/header.scss'
import logo from '../../asset/img/logo.png'

class Header extends React.Component{

    render(){
        return(
            <div className="wrap-header">
            <img src={logo} alt="logo"/>
            </div>
        )
    }
}
export default Header;