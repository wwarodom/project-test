import React from 'react'
import '../styles/signin.scss'
import food from '../asset/img/foodicon.gif'

class Load extends React.Component {
    render() {
        return (

            <div className="wrap">
                
                    <img src={food} alt="food" />
               <div className="card">

               </div>
            </div>

        )
    }
}
export default Load;