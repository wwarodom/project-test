import React from 'react'
import '../styles/load.scss'
import cake from '../asset/img/cake.gif'

class Load2 extends React.Component {
    render() {
        return (

            <div className="wrap">
                <img src={cake} alt="cake" />
            </div>

        )
    }
}
export default Load2;