import React from 'react'
import MainLayout from '../components/layout/MainLayout';
import QR from '../asset/img/QR.png'
import pic1 from '../asset/img/fried.png'
import pic2 from '../asset/img/foodstuff.svg'
import pic3 from '../asset/img/Car.svg'
import pic4 from '../asset/img/restaurant.svg'

class Dashboard extends React.Component {
    render() {
        return (
            <div>

                <MainLayout />
                <div className="warp-profile">
                    <div className="profile">

                        <img src={QR} alt="qr" />
                    </div>
                </div>

                <div className="warp-Dashboard">
                    <div className="card">
                        <img src={pic1} alt="pic1" />
                        <img src={pic2} alt="pic2" />
                        <img src={pic3} alt="pic3" />
                        <img src={pic4} alt="pic4" />
                    </div>
                </div>



            </div>
        )
    }
}
export default Dashboard;