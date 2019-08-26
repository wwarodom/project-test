import React from 'react'
import MainLayout from '../components/layout/MainLayout';
import QR from '../asset/img/QR.png'
import '../styles/main.scss'


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="warp-profile">
                    <MainLayout />

                    <div className="profile">
                        <div className="warp-text" >
                            <h5>หัวข้อใหญ่</h5>
                            <h6>คำเปรย</h6>
                        </div>
                        <img src={QR} alt="qr" />
                    </div>
                </div>
                
                <div className="warp-Dashboard">

                </div>



            </div>
        )
    }
}
export default Dashboard;