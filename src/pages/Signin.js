import React from 'react'
import food from '../asset/img/foodicon.gif'

class Signin extends React.Component {
    render() {
        return (
            <div className="page-signin">
                <div className="wrap">
                    <div className="card" >
                        
                            <div className="row">
                                <div className="col">

                                    <img src={food} alt="food"/>
                                </div>
                                <div className="col">
                                   <h1>Welcome</h1>
                                   
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Signin;