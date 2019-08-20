import React from 'react'
import '../styles/load.scss'
import food from '../asset/img/foodicon.gif'
import load from '../asset/img/Rolling-load.gif';

class Load extends React.Component {
    render() {
        return (

            <div className="wrap">
                <img src={food} alt="food" />
                <img className="load" src={load} alt="load"/>  
            </div>

        )
    }
}
export default Load;